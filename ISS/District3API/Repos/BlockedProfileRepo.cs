using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class BlockedProfileRepository : IRepoInterface<BlockedProfile>
    {
        private readonly DataContext _context;

        public BlockedProfileRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(BlockedProfile item)
        {
            _context.BlockedProfile.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var blockedProfile = _context.BlockedProfile.Find(id);
            if (blockedProfile != null)
            {
                _context.BlockedProfile.Remove(blockedProfile);
                _context.SaveChanges();
            }
        }

        public ICollection<BlockedProfile> GetAll()
        {
            return _context.BlockedProfile.ToList();
        }

        public BlockedProfile GetById(int id)
        {
            return _context.BlockedProfile.Find(id);
        }

        public void Update(BlockedProfile item)
        {
            _context.BlockedProfile.Update(item);
            _context.SaveChanges();
        }
    }
}