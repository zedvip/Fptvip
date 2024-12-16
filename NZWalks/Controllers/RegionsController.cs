using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NZWalks.API.Data;
using NZWalks.Models.Domain;

namespace NZWalks.Controllers
{
    //https://localhost:1234/api
    [Route("api/[controller]")]
    [ApiController]
    public class RegionsController : ControllerBase
    {
        private readonly NZWalksDbContext dbContext;
        public RegionsController(NZWalksDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET ALL REGIONS
        // GET: https://localhost:portnumber/api/regions
        [HttpGet]
        public IActionResult GetALL()
        {
            var regions = dbContext.Regions.ToList();
            return Ok(regions);
        }

        //GET SINGLE REGION (Get Region BY ID)
        //GET:https://localhost:portnumber/api/regions/{id}
        [HttpGet]
        [Route("(id)")]

        public IActionResult GetById([FromRoute] Guid id)
        {
           var region = dbContext.Regions.Find(x => x .ID == id);

            if(region == null)
            {
                return NotFound();
            }



            return Ok(region);
        }






    }
}
