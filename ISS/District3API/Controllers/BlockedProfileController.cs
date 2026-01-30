using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlockedProfileController : Controller
    {
        private readonly IRepoInterface<BlockedProfile> _blockedProfileRepo;
        public BlockedProfileController(IRepoInterface<BlockedProfile> blockedProfileRepo)
        {
            _blockedProfileRepo = blockedProfileRepo;
        }

        [HttpGet(Name = "GetAllBlockedProfiles")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_blockedProfileRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "BlockedProfileGetById")]
        [ProducesResponseType(200, Type = typeof(BlockedProfile))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_blockedProfileRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddBlockedProfile")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] BlockedProfile blockedProfile)
        {
            try
            {
                _blockedProfileRepo.Add(blockedProfile);
                return CreatedAtRoute("BlockedProfileGetById", new { id = blockedProfile.Id }, blockedProfile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateBlockedProfile")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] BlockedProfile blockedProfile)
        {
            try
            {
                _blockedProfileRepo.Update(blockedProfile);
                return Ok(blockedProfile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteBlockedProfile")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _blockedProfileRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}