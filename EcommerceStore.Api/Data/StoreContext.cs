using Microsoft.EntityFrameworkCore;
using EcommerceStore.Api.Entities;
namespace EcommerceStore.Api.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Product> Products { get; set; }
}