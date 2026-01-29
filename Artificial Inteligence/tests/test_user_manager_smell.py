# test_user_manager_smelly.py
import pytest
import time
from user_manager import UserManager


class TestUserManagerSmelly:

    # 1. Duplicate Assert count - Multiple identical assertions
    def test_create_user_with_duplicate_asserts(self):
        manager = UserManager()
        user = manager.create_user("testuser", "password123", "test@example.com")

        # Duplicated assertions
        assert user.username == "testuser"
        assert user.username == "testuser"
        assert user.username == "testuser"
        assert user.is_active == True
        assert user.is_active == True

        # 2. Eager Test count - Testing multiple features in one test

    def test_eager_user_management(self):
        manager = UserManager()

        # Testing user creation
        user = manager.create_user("eager", "password123", "eager@example.com")
        assert user.username == "eager"

        # Testing authentication
        assert manager.authenticate("eager", "password123") == True
        assert manager.authenticate("eager", "wrongpass") == False

        # Testing profile updates
        assert manager.update_profile("eager", email="neweager@example.com") == True
        assert manager.users["eager"].email == "neweager@example.com"

        # Testing permissions
        assert manager.has_permission("eager", "basic") == True
        assert manager.grant_permission("eager", "admin") == True
        assert manager.has_permission("eager", "admin") == True

        # 3. Conditional Logic count - Tests with if/else statements

    def test_authentication_with_conditional_logic(self):
        manager = UserManager()
        manager.create_user("conditional", "password123", "conditional@example.com")

        result = manager.authenticate("conditional", "password123")

        if result:
            assert manager.users["conditional"].login_attempts == 0
        else:
            assert False, "Authentication should succeed"

        if manager.authenticate("conditional", "wrongpass"):
            assert False, "Authentication should fail with wrong password"
        else:
            assert manager.users["conditional"].login_attempts == 1

            # 4. Exception Handling count - Try/except in tests

    def test_create_user_with_exception_handling(self):
        manager = UserManager()

        try:
            user = manager.create_user("exception", "pass12345", "exception@example.com")
            assert user.username == "exception"
        except ValueError:
            pytest.fail("Should not raise exception for valid user")

        try:
            manager.create_user("exception", "newpass12345", "new@example.com")
            pytest.fail("Should raise exception for duplicate username")
        except ValueError:
            pass  # Expected

    # 5. Sleepy Test count - Tests with sleep statements
    def test_notification_with_sleep(self):
        manager = UserManager()
        manager.create_user("sleepy", "password123", "sleepy@example.com")

        # Sleep to simulate waiting
        time.sleep(1)

        result = manager.send_notification("sleepy", "Hello!")

        # Another sleep to ensure delivery
        time.sleep(1)

        assert result == True

        # 6. Redundant Print count - Tests with print statements

    def test_user_permissions_with_prints(self):
        manager = UserManager()
        print("Creating test user")
        manager.create_user("printer", "password123", "printer@example.com")

        print("Testing basic permission")
        assert manager.has_permission("printer", "basic") == True

        print("Granting admin permission")
        manager.grant_permission("printer", "admin")

        print("Checking admin permission")
        assert manager.has_permission("printer", "admin") == True

        print("Test completed successfully")

        # 7. Ignored Test count - Skipped tests

    @pytest.mark.skip(reason="Not implemented yet")
    def test_user_deletion(self):
        manager = UserManager()
        manager.create_user("deleted", "password123", "deleted@example.com")
        # This would test a delete_user method that doesn't exist yet
        assert manager.delete_user("deleted") == True
        assert "deleted" not in manager.users

        # 8. Unknown Test count - Tests without clear purposes

    def test_something(self):
        # Unclear what this test is checking
        manager = UserManager()
        manager.create_user("unknown", "password123", "unknown@example.com")
        assert len(manager.users) > 0

        # 9. Magic Number count - Tests with unexplained literals

    def test_failed_login_attempts_with_magic_numbers(self):
        manager = UserManager()
        manager.create_user("magic", "password123", "magic@example.com")

        # What is 3? Why are we testing with these specific values?
        for i in range(3):
            result = manager.authenticate("magic", "wrongpass")
            assert result == False

            # Why check is_active after 3 failed attempts?
        assert manager.users["magic"].is_active == False

        # Why try 2 more times?
        for i in range(2):
            result = manager.authenticate("magic", "password123")
            assert result == False