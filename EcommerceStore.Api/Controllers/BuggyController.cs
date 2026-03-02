using System.ComponentModel;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;

namespace EcommerceStore.Api.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }
    
    [HttpGet("bad-request")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("This is a Bad Request");
    }
    
    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }
    
    [HttpGet("validation-error")]
    public IActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem 1", "This is the first Validation Error");
        ModelState.AddModelError("Problem 2", "This is the second Validation Error");
        ModelState.AddModelError("Problem 3", "This is the third Validation Error");
        return ValidationProblem();
    }
    [HttpGet("server-error")]
    public IActionResult GetServerError()
    {

         throw new Exception("This is a server exception");   
       
    }
}