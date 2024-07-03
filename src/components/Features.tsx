const Features = () => (
	<section id="features" className="w-full py-12 sm:py-24 lg:py-32 bg-muted">
		<div className="px-4 md:px-6 space-y-12">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg px-3 py-1 text-sm text-muted">
						Key Features
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Powerful Graph Generation
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our graph generator empowers you to create a wide
						variety of visually stunning graphs.
					</p>
				</div>
			</div>
			<ul className="grid gap-6 grid-cols-2 max-sm:grid-cols-1 items-center max-w-4xl mx-auto">
				<li className="border rounded-xl p-4 min-h-60 flex items-center justify-center text-center hover:shadow-lg">
					<div className="grid gap-1">
						<span className="inline-block m-auto">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="100px"
								viewBox="0 -960 960 960"
								width="100px"
								fill="#3333aa">
								<path d="M680-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Zm-400-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-400q0-33-23.5-56.5T280-480q-33 0-56.5 23.5T200-400q0 33 23.5 56.5T280-320Zm160-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-720q0-33-23.5-56.5T440-800q-33 0-56.5 23.5T360-720q0 33 23.5 56.5T440-640Zm240 360ZM280-400Zm160-320Z" />
							</svg>
						</span>
						<h3 className="text-xl font-bold">Excel Graphs</h3>
						<p className="text-muted-foreground">
							Generate random Excel graphs.
						</p>
					</div>
				</li>
				<li className="border rounded-xl p-4 min-h-60 flex items-center justify-center text-center hover:shadow-lg">
					<div className="grid gap-1">
						<span className="inline-block m-auto">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="100px"
								viewBox="0 -960 960 960"
								width="100px"
								fill="#3333aa">
								<path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
							</svg>
						</span>
						<h3 className="text-xl font-bold">Field Graphs</h3>
						<p className="text-muted-foreground">
							Generate random Field graphs.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
);

export default Features;
