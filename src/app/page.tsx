"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <div className={` ${dark ? "dark" : ""}`}>
      <div
        className={`  h-screen cursor-pointer bg-white text-gray-700 dark:text-white dark:bg-black `}
      >
        <div className="max-w-7xl mx-auto dark:bg-black dark:text-white text-gary-700">
          <div className="flex items-center justify-between p-4 ">
            <nav>Logo</nav>
            <button
              onClick={() => setDark(!dark)}
              className="bg-black text-white rounded px-4 py-1.5 dark:bg-white dark:text-black"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>

          <p className="py-4 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus velit perferendis, aliquid, maxime accusantium
            voluptatem quod maiores, consequatur magnam excepturi a ducimus
            fugit? Dolor eius at error temporibus hic, accusantium quibusdam
            odit laboriosam tempore! At quia sunt expedita sit aliquid vitae
            ipsa voluptatum molestias non illum, dolores voluptates asperiores
            quo temporibus vel nesciunt dolorem accusamus dicta dolore. Sunt,
            exercitationem rem! Suscipit, animi similique saepe temporibus autem
            harum? Impedit amet temporibus quae culpa quibusdam reprehenderit
            rem ratione nesciunt dignissimos, reiciendis recusandae maiores esse
            similique unde saepe, non cum. Iste quam voluptatum reprehenderit!
            Minima, veniam voluptatem laborum molestias placeat quo dicta
            provident asperiores, non eaque inventore! Qui sint rem harum,
            similique reprehenderit at sunt voluptate a est porro maxime
            expedita! Voluptatibus, hic modi fuga eveniet magnam, provident
            deleniti ipsam ad praesentium ratione minus id officia natus debitis
            vero nam tempore rerum tenetur, quidem quos aliquam recusandae.
            Mollitia eos necessitatibus quia voluptatibus consequatur voluptatum
            corrupti iure voluptates minus, laboriosam ut sed a earum porro
            doloremque. Nihil a eveniet eos autem quia, voluptatibus tenetur
            modi, asperiores aspernatur ea alias excepturi, dolor soluta
            voluptatem. Obcaecati dolor eveniet voluptates dolorum magnam,
            voluptas facilis maiores sequi perspiciatis. Odit nemo quidem
            consequuntur quam nisi non omnis, veritatis odio quisquam facilis
            saepe minus fuga totam labore rerum aspernatur quaerat? Delectus
            inventore esse consectetur expedita impedit reprehenderit aliquam
            dolorum a magnam, est maiores accusantium error similique non sed ut
            officiis perspiciatis magni officia ratione dignissimos id?
            Assumenda, veniam? Quaerat sunt modi accusamus iste quam laudantium
            architecto praesentium nostrum omnis deserunt. Dignissimos ex magnam
            tempore! Obcaecati voluptas enim suscipit quos, deleniti illum
            officiis corporis laudantium dolores earum iste, eius aliquam.
            Asperiores eos voluptatibus laborum nemo quidem ex expedita velit
            deleniti id sed animi, non possimus illum, totam quas iusto rem
            ullam modi! Nemo aperiam illum quia neque minus quasi incidunt odio
            id obcaecati, maiores nobis sapiente sequi beatae non. Velit
            quibusdam magnam similique culpa eum doloremque asperiores
            laudantium expedita, sapiente atque saepe, totam voluptate minima
            sint possimus. Quaerat illum voluptatem amet quisquam quibusdam
            animi maiores. Dignissimos illo vel inventore aliquam, repudiandae
            nostrum fuga magni non illum quaerat nulla excepturi odio corrupti
            dolor sapiente officia enim nam similique velit magnam placeat sit
            ut consequuntur quo? Officiis delectus minus dolorem quibusdam illo
            quam pariatur laboriosam ipsum, laudantium est vero sed expedita
            adipisci voluptatem facere. Voluptate numquam consequuntur deserunt
            quasi esse iure facilis beatae repellendus asperiores suscipit?
            Ullam similique eligendi nemo quas placeat ipsa ratione, quia
            suscipit repudiandae recusandae veritatis numquam, velit dolores
            officia aliquid ab autem amet vitae nulla. Soluta alias voluptas
            nostrum atque adipisci illum vitae maiores cumque ipsum aperiam
            veritatis qui consequuntur distinctio minus aliquam autem, molestias
            eligendi. Quam, totam repudiandae? Culpa, a velit corrupti unde
            consequuntur sint deserunt repellendus hic ipsam et pariatur facilis
            harum eveniet aperiam omnis ex possimus optio cupiditate eius esse
            quibusdam quis dolores fugit nemo! Molestias impedit officiis
            repellat modi odio placeat rem, consequatur ab voluptatem amet
            vitae, dolorem distinctio in? Ullam sapiente architecto dolore at
            consequuntur, officiis nisi culpa similique magnam voluptates
            quidem. Aspernatur, omnis!
          </p>
        </div>
      </div>
    </div>
  );
}
