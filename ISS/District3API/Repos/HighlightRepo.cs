using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class HighlightRepository : IRepoInterface<Highlight>
    {
        private readonly DataContext _context;

        public HighlightRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Highlight item)
        {
            _context.Highlight.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var highlight = _context.Highlight.Find(id);
            if (highlight != null)
            {
                _context.Highlight.Remove(highlight);
                _context.SaveChanges();
            }
        }

        public ICollection<Highlight> GetAll()
        {
            return _context.Highlight.ToList();
        }

        public Highlight GetById(int id)
        {
            return _context.Highlight.Find(id);
        }

        public void Update(Highlight item)
        {
            _context.Highlight.Update(item);
            _context.SaveChanges();
        }
    }
}