import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";

export const Pagination = ({
	total,
	itemsPerPage,
	route,
	searchParams,
}: {
	itemsPerPage: number;
	total: number;
	route: Route;
	searchParams?: string;
}) => {
	return (
		<nav className="my-16 pt-8" aria-label="pagination">
			<ul className="flex items-center justify-center gap-4">
				{Array.from({ length: Math.ceil(total / itemsPerPage) }, (value, _index) => value).map(
					(_, index) => {
						return (
							<li key={index}>
								<ActiveLink
									href={`${route}/${index + 1}${searchParams ?? ""}` as Route}
									searchParams={!!searchParams}
									activeClassName="text-blue-500"
								>
									{index + 1}
								</ActiveLink>
							</li>
						);
					},
				)}
			</ul>
		</nav>
	);
};
