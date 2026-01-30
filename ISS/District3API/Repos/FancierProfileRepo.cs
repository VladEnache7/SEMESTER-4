using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class FancierProfileRepository : IRepoInterface<FancierProfile>
    {
        private readonly DataContext _context;

        public FancierProfileRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(FancierProfile item)
        {
            _context.FancierProfile.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var fancierProfile = _context.FancierProfile.Find(id);
            if (fancierProfile != null)
            {
                _context.FancierProfile.Remove(fancierProfile);
                _context.SaveChanges();
            }
        }

        public ICollection<FancierProfile> GetAll()
        {
            return _context.FancierProfile.ToList();
        }

        public FancierProfile GetById(int id)
        {
            return _context.FancierProfile.Find(id);
        }

        public void Update(FancierProfile item)
        {
            _context.FancierProfile.Update(item);
            _context.SaveChanges();
        }
    }
}