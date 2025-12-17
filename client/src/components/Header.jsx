
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCartTotals } from '../features/slices/cartSlice'
import { useGetCartQuotationQuery } from '../features/cartApi'

const Header = () => {
  const [cartCount, setCartCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { data, isLoading, error, refetch } = useGetCartQuotationQuery();

  

  const navigate = useNavigate();
  
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Logo */}
            <h1 onClick={() => navigate('/')} className="text-2xl sm:text-3xl font-bold text-gray-900 cursor-pointer">Ecomm</h1>
            
            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl">
              <select className="px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm bg-white focus:outline-none">
                <option>All Categories</option>
              </select>
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Search product" 
                  className="w-full px-4 py-2 border border-gray-300 text-sm focus:outline-none"
                />
              </div>
              <button className="px-6 bg-black text-white rounded-r hover:bg-gray-800">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            {/* Right Icons */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button 
                className="lg:hidden text-gray-700 hover:text-blue-600"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-6 h-6" />
              </button>
              <button className="hidden sm:block text-gray-700 hover:text-blue-600">
                <User className="w-6 h-6" />
              </button>
              <button className="relative text-gray-700 hover:text-blue-600 cursor-pointer">
                <ShoppingCart onClick={() => navigate('/checkout/cart')} className="w-6 h-6" />
                {/* {cartCount > 0 && ( */}
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {data?.items.length}
                  </span>
                {/* )} */}
              </button>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="lg:hidden mt-3 flex gap-2">
              <select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none">
                <option>All</option>
              </select>
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Search product" 
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
                />
              </div>
              <button className="px-4 bg-black text-white rounded hover:bg-gray-800">
                <Search className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Navigation Bar */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-8 text-sm font-medium">
            <button className="flex items-center gap-2 py-4 px-3 border-b-2 border-gray-600 text-gray-900 hover:bg-black hover:text-white">
              <Menu className="w-5 h-5" />
              SHOP BY CATEGORIES
            </button>
            
            <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
              SHOP
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
              PRODUCTS
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
              PAGE
              <ChevronDown className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-2">
            <nav className="flex flex-col text-sm font-medium">
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-900">
                <span className="flex items-center gap-2">
                  <Menu className="w-5 h-5" />
                  SHOP BY CATEGORIES
                </span>
              </button>
              
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
                <span>SHOP</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
                <span>PRODUCTS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
                <span>PAGE</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 py-3 text-gray-700">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header