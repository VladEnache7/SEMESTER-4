using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HighlightController : Controller
    {
        private readonly IRepoInterface<Highlight> _highlightRepo;
        public HighlightController(IRepoInterface<Highlight> highlightRepo)
        {
            _highlightRepo = highlightRepo;
        }

        [HttpGet(Name = "GetAllHighlights")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_highlightRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "HighlightGetById")]
        [ProducesResponseType(200, Type = typeof(Highlight))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_highlightRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddHighlight")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] Highlight highlight)
        {
            try
            {
                _highlightRepo.Add(highlight);
                return CreatedAtRoute("HighlightGetById", new { id = highlight.HighlightId }, highlight);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateHighlight")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] Highlight highlight)
        {
            try
            {
                _highlightRepo.Update(highlight);
                return Ok(highlight);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteHighlight")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _highlightRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}