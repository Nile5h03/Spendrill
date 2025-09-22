/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, PiggyBank, PlusCircle, Zap, UserCircle, LogOut } from 'lucide-react'; // Import LogOut icon from lucide-react
import ThemeToggle from './ThemeToggle';

const navItems = [
  { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { title: 'Budget', path: '/budget', icon: PiggyBank },
  { title: 'Add Expense', path: '/add-expense', icon: PlusCircle },
  { title: 'Upgrade', path: '/upgrade', icon: Zap },
  { title: 'Profile', path: '/profile', icon: UserCircle },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handler for Logout
  const handleLogout = () => {
    // Add logout logic here (like clearing tokens, etc.)
    console.log('Logged out');
    // Redirect to login page after logout
    navigate('/signin');
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <aside className="h-screen w-64 bg-gray-800 text-white p-6 flex flex-col">
      <div
        className="mb-8 flex items-center gap-2 text-2xl font-bold cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src="/savings-svgrepo-com.svg" alt="Budget Buddy Logo" className="h-10 w-10" />
        <span>Budget Buddy</span>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 text-lg hover:bg-gray-700 p-3 rounded transition-colors ${
                  location.pathname === item.path ? 'bg-gray-700' : ''
                }`}
              >
                <item.icon size={20} />
                <span>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto space-y-4">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 text-lg hover:bg-gray-700 p-3 rounded transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
