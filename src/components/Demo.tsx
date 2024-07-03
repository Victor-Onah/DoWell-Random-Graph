import Graph from "./Graph";

const Demo = () => (
	<section id="demo" className="w-full py-12 sm:py-24 lg:py-32 bg-background">
		<div className="px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg px-3 py-1 text-sm text-muted">
						Demo
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Try the DoWell Random Graph
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Auto-magically generate random and excel graphs with
						easy to use customization.
					</p>
				</div>
			</div>
		</div>
		<Graph />
	</section>
);

export default Demo;
