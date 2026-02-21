using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace EcommerceStore.Api.Middleware;

public class ExceptionMiddleware(IHostEnvironment env, ILogger<ExceptionMiddleware> logger) : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception e)
        {
            await HandleException(context, e);
            throw;
        }
    }

    private async Task HandleException(HttpContext context, Exception exception)
    {
        logger.LogError(exception, exception.Message);
        
        if (context.Response.HasStarted)
        {
            logger.LogWarning("The response has already started. Skipping JSON error body.");
            return; // cannot safely write anything
        }
        context.Response.Clear();
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        var response = new ProblemDetails
        {
            Status = 500,
            Detail = env.IsDevelopment() ? exception.StackTrace : null,
            Title = exception.Message
        };
        
        var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
        var json = JsonSerializer.Serialize(response, options);
        await context.Response.WriteAsync(json);
    }
}