import { ProjectDemo, Title1 } from "~/components";
import { foodShopImg } from "~/img";

function MyProject() {
    return (
        <div className="py-28" id="my-project" data-aos={"fade-up"} data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <Title1 className="mt-24">Some Things I've Built</Title1>
            <ProjectDemo
                imgSrc={foodShopImg}
                subTitle="Featured Project"
                title="Food Shop"
                listContent={[
                    "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                ]}
                tools={["ReactJs", "SCSS", "Swiper slider"]}
                githubLink = "https://github.com/PlayBi2/food-shop"
                deployLink="https://food-shop-negative.vercel.app/"
                key = {1}
            />
            <ProjectDemo
                imgSrc={foodShopImg}
                subTitle="Featured Project"
                title="My Project"
                contentPosition="right"
                listContent={[
                    "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                ]}
                tools={["ReactJs", "SCSS", "Swiper slider"]}
                githubLink = "https://github.com/PlayBi2/food-shop"
                deployLink="https://food-shop-negative.vercel.app/"
                key = {2}
            />
            <ProjectDemo
                imgSrc={foodShopImg}
                subTitle="Featured Project"
                title="My Project"
                listContent={[
                    "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
                ]}
                tools={["ReactJs", "SCSS", "Swiper slider"]}
                githubLink = "https://github.com/PlayBi2/food-shop"
                deployLink="https://food-shop-negative.vercel.app/"
                key = {3}
            />
        </div>
    );
}

export default MyProject;
