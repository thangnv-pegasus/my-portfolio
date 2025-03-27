import { ProjectDemo, Title1 } from "~/components";
import { NdShoesImg, foodShopImg, BanGheHoaMaiImg, TwShop } from "~/img";

function MyProject() {
    return (
        <div
            className="py-28"
            id="my-project"
            data-aos={"fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
        >
            <Title1 className="mt-24">Some Things I've Built</Title1>
            <ProjectDemo
                imgSrc={foodShopImg}
                subTitle="Featured Project"
                title="Food Shop"
                listContent={[
                    "Website about buying and selling clean food with functions such as: add, edit, delete products in the cart, search, filter products. In addition, I also added the login function, register an account for users to look like other websites",
                ]}
                tools={["ReactJs", "SCSS", "Swiper slider"]}
                githubLink="https://github.com/thangnv-pegasus/food-shop"
                deployLink="https://food-shop-negative.vercel.app/"
                key={1}
            />
            <ProjectDemo
                imgSrc={NdShoesImg}
                subTitle="Featured Project"
                title="ND-Shoes"
                contentPosition="right"
                listContent={[
                    "This is a project that I completed during one of my introductory software engineering courses and it also helped me review my knowledge. Although I don't have much time, I have also added basic functions to the website such as adding, editing, deleting products in the cart, searching, logging in, registering an account for users.",
                ]}
                tools={["ReactJs", "SCSS", "Swiper slider"]}
                githubLink="https://github.com/thangnv-pegasus/nd-shoes"
                deployLink="https://nd-shoes.vercel.app/"
                key={2}
            />
            <ProjectDemo
                imgSrc={BanGheHoaMaiImg}
                subTitle="Featured Project"
                title="Bàn Ghế Hoa Mai"
                listContent={[
                    "Full-stack e-commerce website. I developed this website using laravel and ReactJs. The website allows users to make purchases and admins can manage orders and products",
                ]}
                tools={["ReactJs", "Laravel", "Cloudinary","Tailwind"]}
                githubLink="https://github.com/thangnv-pegasus/bangtot-web"
                githubLink2="https://github.com/thangnv-pegasus/bangtot-api"
                deployLink="https://food-shop-negative.vercel.app/"
                key={3}
            />
            <ProjectDemo
                imgSrc={TwShop}
                subTitle="Featured Project"
                title="MMO Shop"
                contentPosition="right"
                listContent={[
                    "This is a project that I completed during one of my introductory software engineering courses and it also helped me review my knowledge. Although I don't have much time, I have also added basic functions to the website such as adding, editing, deleting products in the cart, searching, logging in, registering an account for users.",
                ]}
                tools={["ReactJs", "Tailwind", "Firebase", "Context API"]}
                githubLink="https://github.com/thangnv-pegasus/tw-shop"
                deployLink="https://tw-shop-1c92b.web.app/"
                key={4}
            />
        </div>
    );
}

export default MyProject;
