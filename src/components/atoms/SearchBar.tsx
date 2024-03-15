"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { debounce } from "@/utils";
import { searchCharactersLimit } from "@/consts";

export const SearchBar = () => {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInput = () => {
		const query = (inputRef.current as HTMLInputElement).value;

		if (query.length >= searchCharactersLimit) {
			router.push(`/search?query=${query}`);
		}
	};

	return (
		<div className="w-full max-w-lg lg:max-w-xs">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchIcon />
				</div>
				<input
					ref={inputRef}
					onInput={debounce(handleInput, 500)}
					id="search"
					name="search"
					className="block w-full py-1.5 pl-10 pr-3"
					placeholder="Search"
					type="search"
				/>
			</div>
		</div>
	);
};
