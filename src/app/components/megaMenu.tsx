import Link from "next/link";

const MegaMenu = () => {
  return (
    <div className=" bg-white/60 Backdrop-blur-xl absolute right-0 top-11 mt-3 w-[1100px]  text-gray-800 rounded-2xl shadow-2xl p-8 grid grid-cols-5 gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
      {/* Column 1 */}
      <div>
        <h3 className="font-bold mb-4 text-lg text-gray-700 border-b-2 border-gray-500 pb-1">
          Electronics
        </h3>
        <ul className="space-y-2 text-[15px]">
          {/* Mobiles & Accessories */}
          <li className="relative group/submenu cursor-pointer">
            <span className="font-semibold hover:text-gray-600 flex items-center justify-between">
              Mobiles & Accessories
              <span className="ml-2 text-sm">›</span>
            </span>

            {/* Submenu */}
            <ul className="absolute left-full top-0 ml-3 p-4 w-56 bg-white rounded-xl shadow-lg space-y-2 text-sm opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-200">
              <li>
                <Link href="/products/phones/smartphones" className="hover:text-gray-600">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products/phones/feature" className="hover:text-gray-600">
                  Feature Phones
                </Link>
              </li>
              <li>
                <Link href="/products/phones/smartwatches" className="hover:text-gray-600">
                  Smartwatches
                </Link>
              </li>
              <li>
                <Link href="/products/phones/powerbanks" className="hover:text-gray-600">
                  Power Banks
                </Link>
              </li>
              <li>
                <Link href="/products/phones/covers" className="hover:text-gray-600">
                  Phone Covers
                </Link>
              </li>
              <li>
                <Link href="/products/phones/earphones" className="hover:text-gray-600">
                  Earphones / Headphones
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/products/audio" className="hover:text-gray-600">
              Audio & Entertainment
            </Link>
          </li>
          <li>
            <Link href="/products/cameras" className="hover:text-gray-600">
              Cameras & Photography
            </Link>
          </li>
          <li>
            <Link href="/products/tv" className="hover:text-gray-600">
              TV & Home Appliances
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="font-bold mb-4 text-lg text-gray-700 border-b-2 border-gray-500 pb-1">
          Men
        </h3>
        <ul className="space-y-2 text-[15px]">
          <li><Link href="/products/men/clothing" className="hover:text-gray-600">Clothing</Link></li>
          <li><Link href="/products/men/footwear" className="hover:text-gray-600">Footwear</Link></li>
          <li><Link href="/products/men/accessories" className="hover:text-gray-600">Accessories</Link></li>
          <li><Link href="/products/men/winter" className="hover:text-gray-600">Winter Wear</Link></li>
          <li><Link href="/products/men/sports" className="hover:text-gray-600">Sports & Activewear</Link></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="font-bold mb-4 text-lg text-gray-700 border-b-2 border-gray-500 pb-1">
          Women
        </h3>
        <ul className="space-y-2 text-[15px]">
          <li><Link href="/products/women/watches" className="hover:text-gray-600">Watches</Link></li>
          <li><Link href="/products/women/bags" className="hover:text-gray-600">Bags</Link></li>
          <li><Link href="/products/women/jewelry" className="hover:text-gray-600">Jewelry</Link></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3 className="font-bold mb-4 text-lg text-gray-700 border-b-2 border-gray-500 pb-1">
          Baby & Kids
        </h3>
        <ul className="space-y-2 text-[15px]">
          <li><Link href="/products/kids/toys" className="hover:text-gray-600">Toys</Link></li>
          <li><Link href="/products/kids/clothing" className="hover:text-gray-600">Clothing</Link></li>
          <li><Link href="/products/kids/accessories" className="hover:text-gray-600">Accessories</Link></li>
        </ul>
      </div>

      {/* Column 5 */}
      <div>
        <h3 className="font-bold mb-4 text-lg text-gray-700 border-b-2 border-gray-500 pb-1">
          Sports
        </h3>
        <ul className="space-y-2 text-[15px]">
          <li><Link href="/products/sports/cricket" className="hover:text-gray-600">Cricket</Link></li>
          <li><Link href="/products/sports/football" className="hover:text-gray-600">Football</Link></li>
          <li><Link href="/products/sports/fitness" className="hover:text-gray-600">Fitness & Gym</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
