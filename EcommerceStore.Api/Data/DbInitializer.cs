using EcommerceStore.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace EcommerceStore.Api.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
        SeedData(context);
    }

    private static void SeedData(StoreContext context)
    {
        context.Database.Migrate();
        if (context.Products.Any()) return;
        var products = new List<Product>
        {
            // Electronics
            new()
            {
                Name = "Wireless Mouse", Description = "Ergonomic wireless mouse with adjustable DPI.",
                Price = 29.99m, Image = "https://example.com/images/mouse.jpg", Type = "Electronics",
                Brand = "Logitech", Quantity = 50
            },
            new()
            {
                Name = "Mechanical Keyboard", Description = "RGB backlit keyboard with blue switches.",
                Price = 89.99m, Image = "https://example.com/images/keyboard.jpg", Type = "Electronics",
                Brand = "Corsair", Quantity = 30
            },
            new()
            {
                Name = "Gaming Monitor", Description = "27-inch 144Hz gaming monitor.", Price = 249.99m,
                Image = "https://example.com/images/monitor.jpg", Type = "Electronics", Brand = "Asus",
                Quantity = 15
            },
            new()
            {
                Name = "Bluetooth Speaker", Description = "Portable waterproof speaker.", Price = 59.99m,
                Image = "https://example.com/images/speaker.jpg", Type = "Electronics", Brand = "JBL",
                Quantity = 40
            },
            new()
            {
                Name = "Smartphone", Description = "128GB storage, AMOLED display.", Price = 699.99m,
                Image = "https://example.com/images/phone.jpg", Type = "Electronics", Brand = "Samsung",
                Quantity = 20
            },
            new()
            {
                Name = "Laptop", Description = "15-inch laptop with Intel i7 processor.", Price = 999.99m,
                Image = "https://example.com/images/laptop.jpg", Type = "Electronics", Brand = "Dell",
                Quantity = 12
            },
            new()
            {
                Name = "Noise Cancelling Headphones", Description = "Over-ear headphones with ANC.", Price = 199.99m,
                Image = "https://example.com/images/headphones.jpg", Type = "Electronics", Brand = "Sony",
                Quantity = 25
            },
            new()
            {
                Name = "Smartwatch", Description = "Fitness tracking smartwatch.", Price = 149.99m,
                Image = "https://example.com/images/smartwatch.jpg", Type = "Electronics", Brand = "Garmin",
                Quantity = 35
            },
            new()
            {
                Name = "Tablet", Description = "10-inch tablet with stylus support.", Price = 329.99m,
                Image = "https://example.com/images/tablet.jpg", Type = "Electronics", Brand = "Apple",
                Quantity = 18
            },
            new()
            {
                Name = "External SSD", Description = "1TB portable SSD drive.", Price = 119.99m,
                Image = "https://example.com/images/ssd.jpg", Type = "Electronics", Brand = "Samsung",
                Quantity = 60
            },

            // Clothing
            new()
            {
                Name = "Running Shoes", Description = "Lightweight running shoes with breathable mesh.",
                Price = 59.99m, Image = "https://example.com/images/shoes.jpg", Type = "Footwear",
                Brand = "Nike", Quantity = 100
            },
            new()
            {
                Name = "Denim Jacket", Description = "Classic blue denim jacket.", Price = 79.99m,
                Image = "https://example.com/images/jacket.jpg", Type = "Clothing", Brand = "Levi's",
                Quantity = 45
            },
            new()
            {
                Name = "T-Shirt", Description = "Cotton crew neck t-shirt.", Price = 19.99m,
                Image = "https://example.com/images/tshirt.jpg", Type = "Clothing", Brand = "H&M", Quantity = 200
            },
            new()
            {
                Name = "Jeans", Description = "Slim fit stretch jeans.", Price = 49.99m,
                Image = "https://example.com/images/jeans.jpg", Type = "Clothing", Brand = "Wrangler",
                Quantity = 80
            },
            new()
            {
                Name = "Hoodie", Description = "Fleece-lined pullover hoodie.", Price = 39.99m,
                Image = "https://example.com/images/hoodie.jpg", Type = "Clothing", Brand = "Adidas",
                Quantity = 70
            },
            new()
            {
                Name = "Sneakers", Description = "Casual everyday sneakers.", Price = 64.99m,
                Image = "https://example.com/images/sneakers.jpg", Type = "Footwear", Brand = "Puma",
                Quantity = 90
            },
            new()
            {
                Name = "Baseball Cap", Description = "Adjustable cotton cap.", Price = 14.99m,
                Image = "https://example.com/images/cap.jpg", Type = "Accessories", Brand = "New Era",
                Quantity = 150
            },
            new()
            {
                Name = "Winter Coat", Description = "Insulated waterproof coat.", Price = 129.99m,
                Image = "https://example.com/images/coat.jpg", Type = "Clothing", Brand = "Columbia",
                Quantity = 25
            },
            new()
            {
                Name = "Socks Pack", Description = "Pack of 5 cotton socks.", Price = 12.99m,
                Image = "https://example.com/images/socks.jpg", Type = "Clothing", Brand = "Uniqlo",
                Quantity = 300
            },
            new()
            {
                Name = "Sports Shorts", Description = "Breathable athletic shorts.", Price = 24.99m,
                Image = "https://example.com/images/shorts.jpg", Type = "Clothing", Brand = "Reebok",
                Quantity = 120
            },

            // Home & Kitchen
            new()
            {
                Name = "Coffee Maker", Description = "Automatic drip coffee maker with timer.", Price = 49.99m,
                Image = "https://example.com/images/coffeemaker.jpg", Type = "Appliances", Brand = "Philips",
                Quantity = 15
            },
            new()
            {
                Name = "Blender", Description = "High-speed blender with glass jar.", Price = 59.99m,
                Image = "https://example.com/images/blender.jpg", Type = "Appliances", Brand = "Ninja",
                Quantity = 20
            },
            new()
            {
                Name = "Microwave Oven", Description = "Compact 700W microwave oven.", Price = 89.99m,
                Image = "https://example.com/images/microwave.jpg", Type = "Appliances", Brand = "Panasonic",
                Quantity = 10
            },
            new()
            {
                Name = "Vacuum Cleaner", Description = "Bagless upright vacuum cleaner.", Price = 129.99m,
                Image = "https://example.com/images/vacuum.jpg", Type = "Appliances", Brand = "Dyson",
                Quantity = 8
            },
            new()
            {
                Name = "Air Fryer", Description = "Digital air fryer with 6L capacity.", Price = 99.99m,
                Image = "https://example.com/images/airfryer.jpg", Type = "Appliances", Brand = "Tefal",
                Quantity = 14
            },
            new()
            {
                Name = "Toaster", Description = "2-slice toaster with browning control.", Price = 29.99m,
                Image = "https://example.com/images/toaster.jpg", Type = "Appliances", Brand = "Breville",
                Quantity = 25
            },
            new()
            {
                Name = "Rice Cooker", Description = "5-cup automatic rice cooker.", Price = 39.99m,
                Image = "https://example.com/images/ricecooker.jpg", Type = "Appliances", Brand = "Zojirushi",
                Quantity = 18
            },
            new()
            {
                Name = "Electric Kettle", Description = "1.7L stainless steel kettle.", Price = 34.99m,
                Image = "https://example.com/images/kettle.jpg", Type = "Appliances", Brand = "Hamilton Beach",
                Quantity = 22
            },
            new()
            {
                Name = "Ceiling Fan", Description = "3-blade ceiling fan with remote.", Price = 79.99m,
                Image = "https://example.com/images/fan.jpg", Type = "Home", Brand = "Hunter", Quantity = 12
            },
            new()
            {
                Name = "LED Lamp", Description = "Desk lamp with adjustable brightness.", Price = 24.99m,
                Image = "https://example.com/images/lamp.jpg", Type = "Home", Brand = "Ikea", Quantity = 40
            },

            // Sports & Outdoors
            new()
            {
                Name = "Yoga Mat", Description = "Non-slip yoga mat, 6mm thick.", Price = 19.99m,
                Image = "https://example.com/images/yogamat.jpg", Type = "Sports", Brand = "Gaiam", Quantity = 60
            },
            new()
            {
                Name = "Dumbbell Set", Description = "Adjustable dumbbell set 2x20kg.", Price = 149.99m,
                Image = "https://example.com/images/dumbbells.jpg", Type = "Sports", Brand = "Bowflex",
                Quantity = 10
            },
            new()
            {
                Name = "Tennis Racket", Description = "Lightweight graphite racket.", Price = 89.99m,
                Image = "https://example.com/images/racket.jpg", Type = "Sports", Brand = "Wilson", Quantity = 25
            }
        };
        context.Products.AddRange(products);
        context.SaveChanges();
    }
}