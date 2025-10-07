import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("user_id");
    const storedUsername = localStorage.getItem("username");

    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUser({
        id: storedUserId,
        username: storedUsername,
      });
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // Save to localStorage
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user_id", userData.user_id);
    localStorage.setItem("username", userData.username);

    // Update state
    setToken(userData.token);
    setUser({
      id: userData.user_id,
      username: userData.username,
    });
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");

    // Clear state
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated,
    loading,
  };
}
