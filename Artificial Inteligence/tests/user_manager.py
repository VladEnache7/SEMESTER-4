import time
from dataclasses import dataclass
from typing import Dict, List, Optional


@dataclass
class User:
    username: str
    password: str
    email: str
    is_active: bool = True
    login_attempts: int = 0
    permissions: List[str] = None

    def __post_init__(self):
        if self.permissions is None:
            self.permissions = ["basic"]


class UserManager:
    def __init__(self):
        self.users: Dict[str, User] = {}
        self.max_failed_attempts = 3

    def create_user(self, username: str, password: str, email: str) -> User:
        """Create a new user account"""
        if username in self.users:
            raise ValueError(f"User {username} already exists")

        if len(password) < 8:
            raise ValueError("Password must be at least 8 characters")

        user = User(username=username, password=password, email=email)
        self.users[username] = user
        return user

    def authenticate(self, username: str, password: str) -> bool:
        """Authenticate a user"""
        if username not in self.users:
            return False

        user = self.users[username]

        if not user.is_active:
            return False

        if user.password == password:
            user.login_attempts = 0
            return True
        else:
            user.login_attempts += 1
            if user.login_attempts >= self.max_failed_attempts:
                user.is_active = False
            return False

    def update_profile(self, username: str, email: Optional[str] = None, password: Optional[str] = None) -> bool:
        """Update user profile information"""
        if username not in self.users:
            return False

        user = self.users[username]

        if email:
            user.email = email

        if password:
            if len(password) < 8:
                raise ValueError("Password must be at least 8 characters")
            user.password = password

        return True

    def has_permission(self, username: str, permission: str) -> bool:
        """Check if a user has a specific permission"""
        if username not in self.users:
            return False

        return permission in self.users[username].permissions

    def grant_permission(self, username: str, permission: str) -> bool:
        """Grant a permission to a user"""
        if username not in self.users:
            return False

        if permission not in self.users[username].permissions:
            self.users[username].permissions.append(permission)

        return True

    def send_notification(self, username: str, message: str) -> bool:
        """Send a notification to a user"""
        if username not in self.users or not self.users[username].is_active:
            return False

        # In a real system, this would actually send a notification
        # For demonstration purposes, we'll just simulate some delay
        time.sleep(0.1)
        return True

    def deactivate_user(self, username: str) -> bool:
        """Deactivate a user account"""
        if username not in self.users:
            return False

        self.users[username].is_active = False
        return True