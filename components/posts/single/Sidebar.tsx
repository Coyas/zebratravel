import CategoryWidget from "./side-bar/CategoryWidget";
import FollowWidget from "./side-bar/FollowWidget";
import PubliciteWidget from "./side-bar/PubliciteWidget";
import RecentPosts from "./side-bar/RecentsPosts";
import SearchWidget from "./side-bar/SearchWidget";

const Sidebar = () => {
	return (
		<>
			<div className="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
				<div className="inner-column">
					{/* <!-- Search Widget --> */}
					<SearchWidget />

					{/* <!-- Follow Widget --> */}
					<FollowWidget />

					{/* <!-- Category Widget --> */}
					<CategoryWidget />

					{/* <!-- recent post Widget --> */}
					<RecentPosts />

					{/* <!-- Publicidade Widget --> */}
					<PubliciteWidget />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
