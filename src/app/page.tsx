import Avatar from "@/components/avatar";
import Conten from "@/components/conten";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <div className="mt-20 md:z-20 mx-auto">
        <div>
          <header>
            <Avatar />
          </header>
          <section className="ml-5 mr-5">
            <Conten />
          </section>
        </div>
        <footer className="">
          <Footer />
        </footer>
      </div>
      {/* </div>
      </div> */}
    </main>
  );
}
