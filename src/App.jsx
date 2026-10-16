import {
	LayoutDashboard,
	Package,
	ArrowLeftRight,
	Settings,
	Search,
	Plus,
	Bell,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Eye,
	Pencil,
	Trash2,
	SlidersHorizontal,
	ArrowUpDown,
	Boxes,
	CircleDollarSign,
	AlertTriangle,
	CheckCircle2,
	Menu,
	X,
} from "lucide-react";
import AddProductModal from "./components/AddProductModal";
import { useEffect, useState } from "react";

// const products = [
// 	{
// 		id: 1,
// 		title: "Essence Mascara Lash Princess",
// 		category: "Beauty",
// 		price: 9.99,
// 		stock: 94,
// 		image:
// 			"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
// 		status: "In Stock",
// 	},
// ];

const stats = [
	{
		label: "Total Products",
		value: "194",
		note: "Across all categories",
		icon: Package,
		color: "bg-blue-50 text-blue-600",
	},
	{
		label: "Total Inventory",
		value: "8,420",
		note: "Units in stock",
		icon: Boxes,
		color: "bg-violet-50 text-violet-600",
	},
	{
		label: "Inventory Value",
		value: "$24.8K",
		note: "Estimated value",
		icon: CircleDollarSign,
		color: "bg-emerald-50 text-emerald-600",
	},
	{
		label: "Low Stock Items",
		value: "12",
		note: "Needs attention",
		icon: AlertTriangle,
		color: "bg-amber-50 text-amber-600",
	},
];

function Sidebar() {
	return (
		<aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white min-h-screen">
			<div className="flex items-center gap-3 px-6 py-7">
				<div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white">
					<Package size={23} />
				</div>
				<div>
					<h1 className="text-lg font-bold text-slate-900">RESTify</h1>
					<p className="text-xs text-slate-500">API Practice Studio</p>
				</div>
			</div>

			<div className="px-4">
				<p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
					Workspace
				</p>

				<nav className="space-y-1">
					<a
						href="#"
						className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
					>
						<LayoutDashboard size={19} />
						Dashboard
					</a>

					<a
						href="#"
						className="flex items-center gap-3 rounded-xl bg-blue-50 px-3 py-3 text-sm font-semibold text-blue-700"
					>
						<Package size={19} />
						Products
						<span className="ml-auto rounded-md bg-blue-100 px-2 py-0.5 text-xs">
							194
						</span>
					</a>

					<a
						href="#"
						className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
					>
						<ArrowLeftRight size={19} />
						API Playground
					</a>
				</nav>

				<p className="mb-3 mt-9 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
					Preferences
				</p>

				<a
					href="#"
					className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
				>
					<Settings size={19} />
					Settings
				</a>
			</div>

			<div className="mt-auto p-4">
				<div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
					<p className="text-sm font-semibold text-slate-800">Learning Mode</p>
					<p className="mt-1 text-xs leading-5 text-slate-500">
						Practice HTTP methods and master REST API fundamentals.
					</p>
					<div className="mt-4 h-1.5 rounded-full bg-blue-100">
						<div className="h-1.5 w-1/3 rounded-full bg-blue-600" />
					</div>
					<p className="mt-2 text-xs text-slate-500">Your practice journey</p>
				</div>
			</div>
		</aside>
	);
}

function Header() {
	return (
		<header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-8">
			<div className="flex items-center gap-3">
				<button
					className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
					aria-label="Open menu"
				>
					<Menu size={21} />
				</button>
				<div>
					<p className="text-sm text-slate-400">Workspace / Products</p>
					<h2 className="font-semibold text-slate-800">Product Management</h2>
				</div>
			</div>

			<div className="flex items-center gap-3 sm:gap-5">
				<span className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:flex">
					<span className="h-2 w-2 rounded-full bg-emerald-500" />
					API Practice
				</span>

				<button
					className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100"
					aria-label="Notifications"
				>
					<Bell size={20} />
					<span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
				</button>

				<div className="flex items-center gap-2">
					<div className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
						A
					</div>
					<div className="hidden sm:block">
						<p className="text-sm font-semibold text-slate-800">Admin</p>
						<p className="text-xs text-slate-400">Developer</p>
					</div>
					<ChevronDown size={16} className="hidden text-slate-400 sm:block" />
				</div>
			</div>
		</header>
	);
}

function PageHeader() {
	const [popupShow, setPopupShow] = useState(false);

	const handlePopShow = () => {
		setPopupShow(!popupShow);
	};

	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
					Products
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					Manage your inventory and practice REST API operations.
				</p>
			</div>

			<button
				onClick={handlePopShow}
				className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
			>
				<Plus size={18} />
				Add Product
			</button>

			{popupShow && <AddProductModal onPopupClose={handlePopShow} />}
		</div>
	);
}

function StatsCard({ stat }) {
	const Icon = stat.icon;

	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
			<div className="flex items-start justify-between">
				<div>
					<p className="text-sm font-medium text-slate-500">{stat.label}</p>
					<h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
						{stat.value}
					</h3>
				</div>
				<div
					className={`grid h-11 w-11 place-items-center rounded-xl ${stat.color}`}
				>
					<Icon size={21} />
				</div>
			</div>
			<p className="mt-3 text-xs text-slate-400">{stat.note}</p>
		</div>
	);
}

function StatsSection() {
	return (
		<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{stats.map((stat) => (
				<StatsCard key={stat.label} stat={stat} />
			))}
		</section>
	);
}

function ProductToolbar() {
	return (
		<div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
			<div className="relative w-full sm:max-w-sm">
				<Search
					size={18}
					className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
				/>
				<input
					type="search"
					placeholder="Search products by name..."
					className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
				/>
			</div>

			<div className="flex flex-wrap items-center gap-2">
				<select
					defaultValue=""
					className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500 sm:flex-none"
				>
					<option value="" disabled>
						Category
					</option>
					<option>Beauty</option>
					<option>Smartphones</option>
					<option>Groceries</option>
					<option>Furniture</option>
				</select>

				<select
					defaultValue=""
					className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-500 sm:flex-none"
				>
					<option value="" disabled>
						Sort by
					</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Name: A to Z</option>
				</select>

				<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50">
					<SlidersHorizontal size={17} />
					<span className="hidden sm:inline">Filters</span>
				</button>
			</div>
		</div>
	);
}

function StockBadge({ status }) {
	const styles = {
		"In Stock": "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
		"Low Stock": "bg-amber-50 text-amber-700 ring-amber-600/20",
		"Out of Stock": "bg-red-50 text-red-700 ring-red-600/20",
	};

	const icons = {
		"In Stock": CheckCircle2,
		"Low Stock": AlertTriangle,
		"Out of Stock": X,
	};

	const Icon = icons[status];

	return (
		<span
			className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
		>
			<Icon size={13} />
			{status}
		</span>
	);
}

function ProductRow({ product }) {
	return (
		<tr className="border-b border-slate-100 transition hover:bg-slate-50/70 last:border-0">
			<td className="px-5 py-4">
				<input
					type="checkbox"
					aria-label={`Select ${product.title}`}
					className="h-4 w-4 rounded border-slate-300 accent-blue-600"
				/>
			</td>

			<td className="px-3 py-4">
				<div className="flex min-w-[220px] items-center gap-3">
					<img
						src={product.thumbnail}
						alt={product.title}
						className="h-12 w-12 rounded-xl border border-slate-100 bg-slate-50 object-contain p-1"
					/>
					<div>
						<p className="max-w-[200px] truncate text-sm font-semibold text-slate-800">
							{product.title}
						</p>
						<p className="mt-1 text-xs text-slate-400">ID: #{product.id}</p>
					</div>
				</div>
			</td>

			<td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
				{product.category}
			</td>

			<td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-slate-800">
				${product.price.toFixed(2)}
			</td>

			<td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600">
				{product.stock} units
			</td>

			<td className="px-3 py-4">
				{/* <StockBadge status={product.status} /> */}
				{/* <StockBadge status={"In Stock"} /> */}
				{/* <StockBadge status={"Low Stock"} /> */}
				<StockBadge
					// status={
					// 	product.stock < 1 ? "Out of Stock"
					// 	: product.stock > 1 && product.stock < 4 ?
					// 		"In Stock"
					// 	:	"Low Stock"
					// }
					status={
						product.stock < 1 ? "Out of Stock"
						: product.stock < 4 ?
							"Low Stock"
						:	"In Stock"
					}
				/>
			</td>

			<td className="px-4 py-4">
				<div className="flex items-center gap-1">
					<button
						title="View product"
						aria-label="View product"
						className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
					>
						<Eye size={17} />
					</button>
					<button
						title="Edit product"
						aria-label="Edit product"
						className="rounded-lg p-2 text-slate-500 transition hover:bg-amber-50 hover:text-amber-600"
					>
						<Pencil size={17} />
					</button>
					<button
						title="Delete product"
						aria-label="Delete product"
						className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
					>
						<Trash2 size={17} />
					</button>
				</div>
			</td>
		</tr>
	);
}

function ProductTable() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);

	const getAllProduct = () => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data.products));
	};

	console.log(products);

	useEffect(() => {
		console.log("Run Use Effect Hook");
		getAllProduct();
	}, [count]);

	return (
		<div className="overflow-x-auto">
			<div>
				Count : {count}
				<button onClick={() => setCount(count - 1)} className="border p-2">
					-
				</button>
				<button onClick={() => setCount(count + 1)} className="border p-2">
					+
				</button>
			</div>
			<table className="w-full min-w-[850px] text-left">
				<thead className="bg-slate-50/80">
					<tr className="text-xs font-semibold uppercase tracking-wide text-slate-400">
						<th className="px-5 py-4">
							<input
								type="checkbox"
								aria-label="Select all products"
								className="h-4 w-4 rounded border-slate-300 accent-blue-600"
							/>
						</th>
						<th className="px-3 py-4">Product</th>
						<th className="px-3 py-4">Category</th>
						<th className="px-3 py-4">
							<span className="inline-flex items-center gap-1">
								Price <ArrowUpDown size={13} />
							</span>
						</th>
						<th className="px-3 py-4">Stock</th>
						<th className="px-3 py-4">Status</th>
						<th className="px-4 py-4">Actions</th>
					</tr>
				</thead>

				<tbody>
					{products?.map((product) => (
						<ProductRow key={product.id} product={product} />
					))}
					{/* {products?.map((item)=> <p>{item.title}</p>)} */}
				</tbody>
			</table>
		</div>
	);
}

function Pagination() {
	return (
		<div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
			<p className="text-sm text-slate-500">
				Showing <span className="font-semibold text-slate-700">1–6</span> of{" "}
				<span className="font-semibold text-slate-700">194</span> products
			</p>

			<div className="flex items-center gap-2">
				<button
					aria-label="Previous page"
					className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
				>
					<ChevronLeft size={18} />
				</button>
				<button className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-sm font-semibold text-white">
					1
				</button>
				<button className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
					2
				</button>
				<button className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
					3
				</button>
				<span className="px-1 text-slate-400">...</span>
				<button className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50">
					10
				</button>
				<button
					aria-label="Next page"
					className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
				>
					<ChevronRight size={18} />
				</button>
			</div>
		</div>
	);
}

function ProductsPage() {
	return (
		<main className="space-y-7 p-4 sm:p-6 lg:p-8">
			<PageHeader />
			<StatsSection />

			<section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
				<div className="flex flex-col gap-1 px-5 pb-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h2 className="font-semibold text-slate-900">All Products</h2>
						<p className="mt-1 text-sm text-slate-500">
							Browse, inspect and manage your product records.
						</p>
					</div>
					<span className="mt-2 w-fit rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 sm:mt-0">
						GET /products
					</span>
				</div>

				<ProductToolbar />
				<ProductTable />
				<Pagination />
			</section>

			<footer className="flex flex-col gap-2 pb-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
				<p>RESTify · REST API Practice Dashboard</p>
				<p>Powered by DummyJSON · UI Prototype</p>
			</footer>
		</main>
	);
}

export default function App() {
	return (
		<div className="flex min-h-screen bg-slate-50 text-slate-800">
			<Sidebar />
			<div className="min-w-0 flex-1">
				<Header />
				<ProductsPage />
			</div>
		</div>
	);
}
