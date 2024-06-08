import { createSignal } from 'solid-js';

const About2 = () => {
  return (
    <section id="values" class="values">
      <div class="container">
        <header class="section-header">
          <p>Jenis asset yang dapat digunakan</p>
        </header>
        <div class="row">
          <AssetBox
            imgSrc="../src/assets/img/values-1.jpg"
            title="Asset Gambar"
            description="Temukan berbagai koleksi aset gambar berkualitas tinggi."
            mtClass="mt-4 mt-lg-0"
          />
          <AssetBox
            imgSrc="../src/assets/img/values-2.jpg"
            title="Aset Video"
            description="Jelajahi beragam video berkualitas untuk kebutuhan Anda."
            mtClass="mt-4 mt-lg-0"
          />
          <AssetBox
            imgSrc="../src/assets/img/values-3.jpg"
            title="Aset Audio"
            description="Dapatkan berbagai musik dan suara berkualitas tinggi."
            mtClass="mt-4 mt-lg-0"
          />
        </div>
      </div>
    </section>
  );
};

const AssetBox = (props) => {
  const { imgSrc, title, description, mtClass } = props;

  return (
    <div class="col-lg-4" classList={{ [mtClass]: !!mtClass }}>
      <div class="box">
        <img src={imgSrc} class="img-fluid" alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default About2;
