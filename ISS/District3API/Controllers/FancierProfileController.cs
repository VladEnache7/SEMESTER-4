using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FancierProfileController : Controller
    {
        private readonly IRepoInterface<FancierProfile> _fancierProfileRepo;
        public FancierProfileController(IRepoInterface<FancierProfile> fancierProfileRepo)
        {
            _fancierProfileRepo = fancierProfileRepo;
        }

        [HttpGet(Name = "GetAllFancierProfiles")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_fancierProfileRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "FancierProfileGetById")]
        [ProducesResponseType(200, Type = typeof(FancierProfile))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_fancierProfileRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddFancierProfile")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] FancierProfile fancierProfile)
        {
            try
            {
                _fancierProfileRepo.Add(fancierProfile);
                return CreatedAtRoute("FancierProfileGetById", new { id = fancierProfile.ProfileId }, fancierProfile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateFancierProfile")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] FancierProfile fancierProfile)
        {
            try
            {
                _fancierProfileRepo.Update(fancierProfile);
                return Ok(fancierProfile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteFancierProfile")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _fancierProfileRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}