const DocsSection = () => (
	<section id="docs" className="w-full py-12 sm:py-24 lg:py-32 bg-blue-100">
		<div className="px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg px-3 py-1 text-sm text-muted">
						API Documentation
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Integrate DoWell Random Graph API into Your Applications
					</h2>
					<p className="max-w-[900px] text-muted-foreground m-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Seamlessly integrate our APIs into new and existing
						applications. Read our extensively drafted documentation
						to get started.
					</p>
					<a
						className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-slate-50 shadow transition-[colors,_transform] hover:bg-blue-800 bg-blue-900 active:scale-[98%]"
						href="#"
						rel="ugc">
						Get Started
					</a>
				</div>
			</div>
		</div>
	</section>
);

export default DocsSection;
