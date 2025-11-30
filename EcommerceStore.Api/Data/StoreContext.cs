using EcommerceStore.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace EcommerceStore.Api.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Product> Products { get; set; }
}