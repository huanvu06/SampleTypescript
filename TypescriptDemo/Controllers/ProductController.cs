using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TypescriptDemo.Models;

namespace TypescriptDemo.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        // GET api/values
        [HttpGet]
        public List<ProductDto> Get()
        {
            return Data;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ProductDto Get(int id)
        {
            return Data.FirstOrDefault(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ProductDto value)
        {
            var item = Data.SingleOrDefault(x => x.Id == id);
            if (item != null)
            {
                item.Name = value.Name;
                item.UnitPrice = value.UnitPrice;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var item = Data.SingleOrDefault(x => x.Id == id);
            if (item != null)
            {
                Data.Remove(item);
            }
        }

        static readonly List<ProductDto> Data = new List<ProductDto>
        {
            new ProductDto
            {
                Id = 1,
                Name = "Product 1",
                UnitPrice = 10.5f
            },
            new ProductDto
            {
                Id = 2,
                Name = "Product 2",
                UnitPrice = 20f
            },
            new ProductDto
            {
                Id = 3,
                Name = "Product 3",
                UnitPrice = 33.5f
            },
            new ProductDto
            {
                Id = 4,
                Name = "Product 4",
                UnitPrice = 54.5f
            }
        };
    }
}
