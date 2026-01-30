using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class CloseFriendsProfileRepository : IRepoInterface<CloseFriendProfile>
    {
        private readonly DataContext _context;

        public CloseFriendsProfileRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(CloseFriendProfile item)
        {
            _context.CloseFriendProfile.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var closeFriendProfile = _context.CloseFriendProfile.Find(id);
            if (closeFriendProfile != null)
            {
                _context.CloseFriendProfile.Remove(closeFriendProfile);
                _context.SaveChanges();
            }
        }

        public ICollection<CloseFriendProfile> GetAll()
        {
            return _context.CloseFriendProfile.ToList();
        }

        public CloseFriendProfile GetById(int id)
        {
            return _context.CloseFriendProfile.Find(id);
        }

        public void Update(CloseFriendProfile item)
        {
            _context.CloseFriendProfile.Update(item);
            _context.SaveChanges();
        }
    }
}