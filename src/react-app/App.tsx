import "./App.css";

const baseUrl = import.meta.env.BASE_URL;
const playStoreUrl =
	"https://play.google.com/store/apps/details?id=dev.sylvestre.babyclock";

const features = [
	{
		title: "Local reminders",
		description:
			"Create baby care reminders for feeding, diaper changes, sleep, medicine, appointments, and custom routines.",
	},
	{
		title: "Android alarms",
		description:
			"Keep important routines visible with local notifications designed for daily baby care.",
	},
	{
		title: "Daily journal",
		description:
			"Review completed reminders in one calm timeline so the day stays easy to follow.",
	},
	{
		title: "Private by design",
		description:
			"BabyClock stores reminder data locally on the device. No account is required for core tracking.",
	},
];

const proFeatures = [
	"Unlimited baby reminders",
	"Advanced daily care journal",
	"Smart recurring alarms",
	"Priority access to Pro features",
];

function App() {
	return (
		<main>
			<header className="site-header">
				<a className="brand" href="#top" aria-label="BabyClock home">
					<img src={`${baseUrl}babyclock-icon.png`} alt="" />
					<span>BabyClock</span>
				</a>
				<nav aria-label="Main navigation">
					<a href="#features">Features</a>
					<a href="#pro">Pro</a>
					<a href={playStoreUrl} target="_blank" rel="noreferrer">
						Download
					</a>
					<a href={`${baseUrl}privacy.html`}>Privacy</a>
					<a href={`${baseUrl}terms.html`}>Terms</a>
				</nav>
			</header>

			<section className="hero" id="top">
				<div className="hero-copy">
					<p className="eyebrow">Baby reminder app</p>
					<h1>Simple reminders for baby care routines.</h1>
					<p className="lead">
						BabyClock helps parents keep feeding, diaper, sleep, medicine, and
						appointment reminders in one quiet place.
					</p>
					<div className="hero-actions">
						<a
							className="primary-action"
							href={playStoreUrl}
							target="_blank"
							rel="noreferrer"
						>
							Download on Google Play
						</a>
						<a className="secondary-action" href="#features">
							Explore features
						</a>
					</div>
				</div>

				<div className="app-preview" aria-label="BabyClock app preview">
					<div className="phone-shell">
						<div className="phone-top">
							<span>9:41</span>
							<span>BabyClock</span>
						</div>
						<img
							className="app-icon"
							src={`${baseUrl}babyclock-icon.png`}
							alt="BabyClock app icon"
						/>
						<div className="reminder-list">
							<div>
								<span>08:00</span>
								<strong>Feeding reminder</strong>
							</div>
							<div>
								<span>10:30</span>
								<strong>Diaper change</strong>
							</div>
							<div>
								<span>14:30</span>
								<strong>Nap time</strong>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section" id="features">
				<div className="section-heading">
					<p className="eyebrow">Focused and local</p>
					<h2>Everything is centered on reminders.</h2>
				</div>
				<div className="feature-grid">
					{features.map((feature) => (
						<article className="feature-card" key={feature.title}>
							<h3>{feature.title}</h3>
							<p>{feature.description}</p>
						</article>
					))}
				</div>
			</section>

			<section className="pro-section" id="pro">
				<div>
					<p className="eyebrow">BabyClock Pro</p>
					<h2>Optional Pro plan for families who need more.</h2>
					<p>
						The free version is useful for getting started. Pro is designed for
						parents who want more reminders, deeper history, and improved
						routine control.
					</p>
				</div>
				<ul className="pro-list">
					{proFeatures.map((feature) => (
						<li key={feature}>{feature}</li>
					))}
				</ul>
			</section>

			<section className="section faq-section">
				<div className="section-heading">
					<p className="eyebrow">Questions</p>
					<h2>Built for a small, practical workflow.</h2>
				</div>
				<div className="faq-grid">
					<article>
						<h3>Does BabyClock require an account?</h3>
						<p>No. Core reminder data is stored locally on the device.</p>
					</article>
					<article>
						<h3>Is BabyClock medical advice?</h3>
						<p>
							No. BabyClock is a reminder and tracking utility, not a medical
							service.
						</p>
					</article>
					<article>
						<h3>Which platform is targeted first?</h3>
						<p>BabyClock is Android-first for the initial release.</p>
					</article>
				</div>
			</section>

			<footer className="site-footer">
				<p>BabyClock</p>
				<div>
					<a href={playStoreUrl} target="_blank" rel="noreferrer">
						Download
					</a>
					<a href={`${baseUrl}privacy.html`}>Privacy Policy</a>
					<a href={`${baseUrl}terms.html`}>Terms of Use</a>
				</div>
			</footer>
		</main>
	);
}

export default App;
