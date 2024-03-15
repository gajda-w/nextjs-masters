import { type Route } from "next";
import { Logo } from "@/components/atoms/Logo";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { SearchBar } from "@/components/atoms/SearchBar";
import { ShoppingCart } from "@/components/atoms/ShoppingCart";

export const Navbar = () => {
	const className = "flex h-full items-center";
	const inactiveClassName = "text-blue-800";
	const activeClassName = "underline text-white";

	return (
		<header className="sticky top-0 z-10 bg-black py-6 text-black shadow-sm">
			<div className="flex flex-col justify-between lg:flex-row lg:items-center">
				<div className="scroll-shadows flex items-center overflow-x-scroll scroll-smooth pb-3 lg:mx-0 lg:overflow-x-auto lg:pb-0">
					<nav className="flex max-w-full whitespace-nowrap">
						<Logo />
						<ul className="ml-8 flex space-x-8">
							<li>
								<ActiveLink
									href="/"
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
									className={className}
								>
									Home
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href={"/products" as Route}
									className={className}
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
								>
									All
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href="/collections"
									className={className}
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
								>
									Collections
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href="/categories"
									className={className}
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
								>
									Categories
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href={"/categories/t-shirts" as Route}
									className={className}
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
								>
									T-shirts
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href={"/categories/hoodies" as Route}
									className={className}
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
								>
									Hoodies
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									href={"/categories/accessories" as Route}
									className={className}
									inactiveClassName={inactiveClassName}
									activeClassName={activeClassName}
								>
									Accessories
								</ActiveLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className="mx-4 flex items-center justify-between lg:mx-0">
					<SearchBar />
					<ShoppingCart />
				</div>
			</div>
		</header>
	);
};
