import Pagetitle from "components/pagetitle";

function Bless() {
  return (
    <div className="bg-primaryBackground relative">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-4 md:py-16">
        <Pagetitle title="祝福語" />
        <div className="aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Bless;
