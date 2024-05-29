import Avatar from "@/components/avatar";
import Conten from "@/components/conten";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="ml-5 mr-5">
      <div className="mt-20 md:z-20 mx-auto">
        <div>
          <header>
            <Avatar />
          </header>
          <section className="">
            <Conten />
          </section>
        </div>
        <footer className="">
          <Footer />
        </footer>
      </div>
      {/* </div>
      </div> */}
      <Header />
    </main>
  );
}
