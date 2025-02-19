import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";

const Testimonials = () => {

    const reviews = [
        {
            name: "Dipendra Lama",
            username: "Business Owner",
            body: "BitBoom Ltd has transformed my business operations with their seamless web development and digital marketing solutions. Their support has been invaluable.",
            img: "https://i.pravatar.cc/100?img=1",
        },
        {
            name: "Sita Rani",
            username: "Parlour Owner",
            body: "The team at BitBoom Ltd has helped me create an engaging online presence for my parlour. My clients love the ease of booking through the website!",
            img: "https://i.pravatar.cc/100?img=2",
        },
        {
            name: "Ramesh Thapa",
            username: "Automobile Business Owner",
            body: "BitBoom Ltd's SEO and digital marketing strategies have helped me reach more customers and increase business leads. They know how to get results!",
            img: "https://i.pravatar.cc/100?img=3",
        }
    ];

    const ReviewCard = ({ img, name, username, body, }) => {
        return (
            <figure
                className={cn(
                    "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4 z-10",
                    "border-gray-950/[.1] bg-white hover:bg-white/95",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="40" height="40" alt="" src={img} />
                    <div className="flex flex-col gap-0">
                        <figcaption className="tracking-tight text-sm font-semibold leading-tight">{name}</figcaption>
                        <p className="font-medium text-sm dark:text-white/40 leading-tight">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 tracking-tight">{body}</blockquote>
            </figure>
        );
    };

    return (
        <section id="testimonials" className="min-h-screen flex flex-col items-center justify-center  relative bg-white">
            <BlurFade delay={0.25} inView>
                <div className="text-3xl md:text-4xl md:font-medium tracking-[-0.06em] text-gray-900 pt-16 text-center">
                    Client Testimonials
                </div>
            </BlurFade>
            {/* <BlurFade delay={0.5} inView> */}
                {/* <div className="text-xl md:text-2xl tracking-[-0.06em] text-neutral-100 pt-2 text-center">
                    Hear from our Nepali clients
                </div> */}
            {/* </BlurFade> */}
            <div className="flex z-10 h-[500px] md:h-[600px] w-full flex-col items-center justify-center overflow-hidden md:py-4">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
            </div>
            <div className="pointer-events-none z-20 absolute inset-y-0 left-0 md:w-1/4 w-1/6 "></div>
            <div className="pointer-events-none z-20 absolute inset-y-0 right-0 md:w-1/4 w-1/6 "></div>
        </section>
    );
}

export default Testimonials;
