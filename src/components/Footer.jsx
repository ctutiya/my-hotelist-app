import { Container } from 'react-bootstrap'
import { BiCopyright, IoGlobeOutline, BiDollar } from 'react-icons/all'

export default function Footer() {
	return (
		<footer className="py-4" style={{ backgroundColor: "#F5F5F7" }}>
			<Container className="d-flex justify-content-between">
				<div className="d-flex align-items-center" style={{ gap: 30 }}>
					<div className="copyright">
						<BiCopyright /> 2021 Hotelist, Inc.
					</div>
					<div className="d-flex links" style={{ gap: 30 }}>
						<span>Privacy</span>
						<span>Terms</span>
						<span>Sitemap</span>
					</div>
				</div>
				<div className="d-flex align-items-center" style={{ gap: 30 }}>
					<span>
						<IoGlobeOutline />
						English (CA)
					</span>
					<span>
						<BiDollar />
						CAD
					</span>
				</div>
			</Container>
		</footer>
	)
}