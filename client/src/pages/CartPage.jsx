import React, { useState } from 'react';
import { ShoppingCart, Heart, User, Search, Menu, Facebook, Youtube, Twitter, Instagram, Linkedin, MapPin, Package,} from 'lucide-react';


export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wash Away Odor Germs Soapes',
      price: 180.00,
      quantity: 2,
      image: '/api/placeholder/80/80'
    }
  ]);

    const [cartCount, setCartCount] = useState(0);
    const [likedItems, setLikedItems] = useState([]);
  
    const smartphones = [
      { 
        name: 'Galaxy S23 Ultra', 
        price: '₹29999', 
        originalPrice: '₹74999',
        discount: '60% OFF',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop&q=80'
      },
      { 
        name: 'Galaxy M13 (5GB | 64 GB)', 
        price: '₹10499', 
        originalPrice: '₹14999',
        discount: '30% OFF',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&q=80'
      },
      { 
        name: 'Galaxy M53 (5GB | 64 GB)', 
        price: '₹16999', 
        originalPrice: '₹24999',
        discount: '32% OFF',
        image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg'
      },
      { 
        name: 'Galaxy M23 (5GB | 64 GB)', 
        price: '₹11999', 
        originalPrice: '₹17999',
        discount: '33% OFF',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop&q=80'
      },
      { 
        name: 'Galaxy S22 Ultra', 
        price: '₹59999', 
        originalPrice: '₹89999',
        discount: '33% OFF',
        image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&h=300&fit=crop&q=80'
      }
    ];
  
    const categories = [
      { name: 'Mobile', icon: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&q=80' },
      { name: 'Cosmetics', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&q=80' },
      { name: 'Electronics', icon: '💻', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop&q=80' },
      { name: 'Furniture', icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop&q=80' },
      { name: 'Watches', icon: '⌚', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80' },
      { name: 'Decor', icon: '🌿', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&h=200&fit=crop&q=80' },
      { name: 'Accessories', icon: '🎧', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80' }
    ];
  
    const brands = [
      { 
        name: 'iPhone', 
        discount: 'UP to 80% OFF', 
        bg: 'bg-gray-900',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&q=80',
        logo: '🍎'
      },
      { 
        name: 'realme', 
        discount: 'UP to 80% OFF', 
        bg: 'bg-yellow-400',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
        logo: 'realme',
        textColor: 'text-gray-900'
      },
      { 
        name: 'XIAOMI', 
        discount: 'UP to 80% OFF', 
        bg: 'bg-orange-500',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop&q=80',
        logo: 'mi'
      },
      { 
        name: 'Samsung', 
        discount: 'UP to 80% OFF', 
        bg: 'bg-blue-600',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
        logo: 'SAMSUNG'
      }
    ];
  
    const toggleLike = (productId) => {
      setLikedItems(prev => 
        prev.includes(productId) 
          ? prev.filter(id => id !== productId)
          : [...prev, productId]
      );
    };
  
    const quickCategories = [
      { name: 'Mobiles', icon: '📱', color: 'bg-teal-100' },
      { name: 'Electronics', icon: '📺', color: 'bg-purple-100' },
      { name: 'Offers', icon: '₹', color: 'bg-pink-100' },
      { name: 'Televisions', icon: '🖥️', color: 'bg-blue-100' },
      { name: 'Washing Machines', icon: '🌀', color: 'bg-gray-100' },
      { name: 'Two-wheelers', icon: '🏍️', color: 'bg-cyan-100' },
      { name: 'Appliances', icon: '🔌', color: 'bg-indigo-100' },
      { name: 'New Cars', icon: '🚗', color: 'bg-red-100' },
      { name: 'Used Cars', icon: '🚙', color: 'bg-yellow-100' },
      { name: 'Exercise', icon: '💪', color: 'bg-green-100' },
      { name: 'Furniture', icon: '🪑', color: 'bg-amber-100' },
      { name: 'Tyres', icon: '⚫', color: 'bg-slate-100' },
      { name: 'Tractors', icon: '🚜', color: 'bg-blue-200' }
    ];
  
    const productSections = [
      {
        title: 'Top-selling mobile phones',
        products: [
          { name: 'iPhone 17 256 GB - Green', price: '₹6,908/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1695048064807-086d0f15ea73?w=200&h=200&fit=crop&q=80' },
          { name: 'OnePlus 13R 5G 256GB', price: '₹2,600/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&q=80' },
          { name: 'OPPO Reno 14 512 GB', price: '₹2,389/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=200&fit=crop&q=80' },
          { name: 'Redmi Note 14 128 GB', price: '₹1,133/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1592286927505-355d69c54e61?w=200&h=200&fit=crop&q=80' }
        ]
      },
      {
        title: 'Televisions at stores near you',
        products: [
          { name: 'Sony 108 cm (43 inch) 4K', price: '₹2,409/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
          { name: 'Panasonic 109.22 cm', price: '₹1,652/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
          { name: 'LG 109 cm (43 inch) UHD', price: '₹2,595/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
          { name: 'Croma 109.22 cm (43")', price: '₹1,801/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' }
        ]
      },
      {
        title: 'Popular two-wheelers for you',
        products: [
          { name: 'Honda Activa 6G', price: '₹1,489/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=200&h=200&fit=crop&q=80' },
          { name: 'Honda SP 125 2025', price: '₹2,408/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=200&h=200&fit=crop&q=80' },
          { name: 'Yamaha MT 15 V2 Dual', price: '₹2,372/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&h=200&fit=crop&q=80' },
          { name: 'Suzuki Access 125', price: '₹1,725/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=200&h=200&fit=crop&q=80' }
        ]
      },
      {
        title: 'Best picks in new cars',
        products: [
          { name: 'Maruti Suzuki Swift', price: '₹14,856/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1583267746897-c830473f4ca9?w=200&h=200&fit=crop&q=80' },
          { name: 'Tata Punch Accomplished', price: '₹22,807/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=200&fit=crop&q=80' },
          { name: 'Mahindra XUV 700', price: '₹14,849/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=200&fit=crop&q=80' },
          { name: 'MG Hector Smart EV', price: '₹20,236/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop&q=80' }
        ]
      }
    ];
  
    const recommendations = [
      { title: 'Explore Televisions on Easy EMIs', product: 'LG 260 L 2 Star Frost Free...', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=150&h=150&fit=crop&q=80' },
      { title: 'Our recommendation', product: 'LG 260 L 2 Star Frost Free...', img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=150&h=150&fit=crop&q=80' },
      { title: 'Most viewed', product: 'Samsung Galaxy S25 Ult...', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=150&h=150&fit=crop&q=80' },
      { title: 'Popular among users', product: 'OPPO A5 5G 128 GB Stor...', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=150&h=150&fit=crop&q=80' },
      { title: 'Most sold air conditioner', product: 'Daikin 1.5 Ton 5 Star Split...', img: 'https://images.unsplash.com/photo-1631545806609-7037f4b8b31d?w=150&h=150&fit=crop&q=80' },
      { title: 'Top-selling two-wheeler', product: 'Honda Activa DLX (Black)', img: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=150&h=150&fit=crop&q=80' },
      { title: 'Top-selling washing machine', product: 'Samsung 7kg Washing...', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=150&h=150&fit=crop&q=80' }
    ];

  const shippingCost = 10.00;
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderTotal = subtotal + shippingCost;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">Welcome to ecommerce Ecomm</span>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Deliver to <strong className="text-gray-900">423651</strong></span>
              </div>
              <button className="flex items-center gap-1 hover:text-blue-600">
                <Package className="w-3 h-3" />
                Track your order
              </button>
              <span className="hover:text-blue-600 cursor-pointer">All Offers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Menu className="w-6 h-6 text-gray-700" />
              <h1 className="text-2xl font-bold text-blue-600">Ecomm</h1>
            </div>
            
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search essentials, groceries and more..." 
                  className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <User className="w-5 h-5" />
                <span>Sign In</span>
              </button>
              <button className="relative text-gray-700 hover:text-blue-600">
                <Heart className="w-5 h-5" />
                {likedItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {likedItems.length}
                  </span>
                )}
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 relative">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 left-3 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">SHOPPING CART</h1>

        <div className="flex gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded shadow">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-600">
                <div className="col-span-5">Item</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-center">Qty</div>
                <div className="col-span-3 text-right">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cartItems.map(item => (
                <div key={item.id} className="border-b border-gray-200 p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5 flex items-center gap-4">
                      <img src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop&q=80" alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="col-span-2 text-right text-gray-900 font-medium">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                      />
                    </div>
                    <div className="col-span-3 text-right text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      Edit
                    </button>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
                    >
                      Remove item
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <button className="px-6 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50">
                Continue Shopping
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50">
                Update Shopping Cart
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="w-96">
            <div className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-bold mb-6">SUMMARY</h2>

              <div className="border-b border-gray-200 pb-4 mb-4">
                <button className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900">
                  <span>Estimate Shipping and Tax</span>
                  <span>▼</span>
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping (Flat Rate - Fixed)</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                  <span>Order Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4 mb-4">
                <button className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900">
                  <span>Apply Discount Code</span>
                  <span>▼</span>
                </button>
              </div>

              <button className="w-full bg-gray-800 text-white py-4 rounded hover:bg-gray-900 font-medium mb-4">
                PROCEED TO CHECKOUT
              </button>

              <button className="w-full text-center text-sm text-gray-600 hover:text-gray-900">
                Check Out with Multiple Addresses
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}