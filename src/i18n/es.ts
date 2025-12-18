export default {
  header: {
    nav: [
      {
        icon: 'services',
        label: 'Servicios <span class="text-[16px] ml-px">▾</span>',
        href: '/services',
      },
      {
        icon: '',
        label: 'Nosotros',
        href: '/about-us',
      },
      {
        icon: '',
        label: 'FAQ',
        href: '/faq',
      },
      {
        icon: '',
        label: 'Galería',
        href: '/gallery',
      },
    ],
    services: [
      {
        label: 'Peluquería móvil para perros',
        href: 'mobile-dog-grooming',
      },
      {
        label: 'Peluquería móvil para gatos',
        href: 'mobile-cat-grooming',
      },
      {
        label: 'Limpieza dental sin anestesia',
        href: 'dental-cleaning',
      },
    ],
    buttons: [
      {
        label: 'Reservar cita',
        href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
        icon: 'arrow',
        background: 'bg-primary',
      },
      {
        label: 'Llamar ahora',
        href: '/tel:+19548684929',
        icon: 'phone',
        background: 'bg-secondary',
      },
    ],
  },
  main: {
    hero: {
      title:
        'Con Monarca <br class="hidden md:block"/> Grooming. Consentimos <br class="hidden md:block"/> a tus mascotas en casa',
      description: 'Peluquería móvil para mascotas en Florida',
      buttons: [
        {
          label: 'Llama Ya!',
          href: '/tel:+19548684929',
          color: 'secondary',
        },
        {
          label: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
          color: 'primary',
        },
      ],
    },
    information: {
      list: [
        {
          icon: 'pets',
          numer: '12,540+',
          title: 'Mascotas felices',
          description:
            'Peluquería móvil para perros y gatos que mantiene a las mascotas calmadas, limpias y queridas.',
        },
        {
          icon: 'client',
          numer: '100%',
          title: 'Satisfacción del cliente',
          description:
            'Peluquería móvil de confianza enfocada en el cuidado, la calidad y la satisfacción.',
        },
        {
          icon: 'pets-2',
          numer: '20+ años',
          title: 'Peluqueros expertos',
          description:
            'Una tradición familiar en peluquería cuidadosa con resultados premium.',
        },
      ],
      gromming: {
        title: 'Descubre nuestros servicios de peluquería móvil',
        description:
          'Monarca Grooming ofrece peluquería móvil suave y sin estrés para perros y gatos en Florida. Con más de veinte años <br class="hidden md:block"/> de experiencia familiar, ofrecemos un manejo tranquilo, cuidado premium y resultados consistentes en la puerta de tu casa.',
        items: [
          {
            with: '309',
            height: '345',
            image: 'dog-grooming',
            title: 'Peluquería móvil para perros',
            description: 'Peluquería profesional a domicilio',
            button: {
              label: 'Ver servicio',
              href: '/mobile-dog-grooming',
            },
          },
          {
            with: '315',
            height: '311',
            image: 'cat-grooming',
            title: 'Peluquería móvil para gatos',
            description:
              'Peluquería tranquila y delicada para gatos en tu hogar',
            button: {
              label: 'Ver servicio',
              href: '/mobile-cat-grooming',
            },
          },
          {
            with: '305',
            height: '352',
            image: 'dog-dental',
            title: 'Limpieza Dental Perros',
            description: 'Cuidado dental profesional para perros',
            button: {
              label: 'Ver servicio',
              href: '/dental-cleaning',
            },
          },
          {
            with: '294',
            height: '303',
            image: 'cat-dental',
            title: 'Limpieza Dental Gatos',
            description: 'Cuidado dental profesional para gatos',
            button: {
              label: 'Ver servicio',
              href: '/dental-cleaning',
            },
          },
        ],
      },
      choose: {
        title: 'Por qué elegir Monarca Grooming',
        description:
          'En Monarca Grooming tratamos a cada mascota como familia. Desde que nuestra unidad móvil llega a tu hogar, tu mascota es nuestra prioridad. Nuestra misión es ofrecer mascotas calmadas, limpias y felices, dando tranquilidad y confianza a los dueños.',
        items: [
          {
            icon: 'choose-1',
            title: 'Peluqueros experimentados',
            description:
              'Nuestro equipo aporta más de veinte años de experiencia combinada en peluquería profesional. Cada servicio se realiza con paciencia, empatía y respeto por las necesidades individuales de tu mascota.',
          },
          {
            icon: 'choose-2',
            title: 'Servicio totalmente móvil que viene a ti',
            description:
              'Sin desplazamientos, sin estrés y sin salas de espera. Nuestras unidades móviles están equipadas para ofrecer un entorno limpio, seguro y tranquilo justo fuera de tu casa.',
          },
        ],
      },
    },
    process: {
      title: 'Un proceso sencillo y cuidadoso',
      description:
        'En solo 3 pasos sencillos, tu mascota disfruta de una experiencia de peluquería calmada, gentil y sin estrés.',
      items: [
        {
          icon: 'process-1',
          back: 'bg-primary',
          title: '1. Reserva fácil',
          description:
            'Agendamos tu cita a través de nuestro sistema y confirmamos todos los detalles para garantizar una experiencia fluida y sin estrés para ti y tu mascota.',
          image: 'bg-process-1',
        },
        {
          icon: 'process-2',
          back: 'bg-secondary',
          title: '2. Nosotros vamos a ti',
          description:
            'Nuestra unidad móvil totalmente equipada llega a tu hogar con todo lo necesario para arreglar a tu mascota de forma segura, tranquila y cómoda.',
          image: 'bg-process-2',
        },
        {
          icon: 'process-3',
          back: 'bg-primary',
          title: '3. Peluquería profesional y con cariño',
          description:
            'Tu mascota recibe un cuidado paciente, profesional y de alta calidad, guiado por más de veinte años de experiencia familiar y un genuino amor por los animales.',
          image: 'bg-process-3',
        },
      ],
      banner: {
        title: 'Brinda confort y cuidado a tu mascota',
        description:
          'Programa tu cita de peluquería móvil con Monarca Grooming y disfruta de una experiencia suave y sin estrés en casa. Nuestro equipo aporta experiencia, paciencia y un manejo tranquilo para cada perro y gato que atendemos en Florida.',
        buttons: [
          {
            label: '¡Llama ahora!',
            href: '/tel:+19548684929',
          },
          {
            label: '¡Reserva ahora!',
            href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
          },
        ],
      },
    },
    results: {
      title: 'Mascotas felices. Resultados hermosos.',
      description:
        'Mira nuestras últimas transformaciones, mascotas felices y momentos reales de nuestras jornadas de peluquería. Cada foto recuerda nuestra misión de ofrecer calma, confort y resultados hermosos para cada perro y gato que atendemos en Florida.',
    },
    about: {
      title: 'Lo que los dueños dicen <br/> sobre Monarca Grooming',
      description:
        'Respaldados por reseñas reales de cinco estrellas de familias que confían <br/> en nosotros, Monarca Grooming es conocido por <br/> un cuidado amable, resultados limpios y una <br/>  experiencia de peluquería calmada en casa.',
    },
  },
  book: {
    title: 'Reserva tu cita de peluquería móvil para mascotas en segundos',
    description: 'Perfecto, pero prefiero llamar',
    formText:
      '¡Gracias por elegirnos! Si la disponibilidad en línea no se ajusta a tus necesidades, te invitamos a contactarnos directamente. Por favor llama o envía un SMS al <a href="tel:+19546820083">(954) 682-0083</a> o al <a href="tel:+15612144684">(561) 214-4684</a>. Con frecuencia podemos ofrecer más opciones de las que aparecen en el sistema. Queremos asegurarnos de brindarte el mejor servicio posible.',
  },
  servicesPage: {
    grooming: {
      title: 'Descubre nuestros servicios de peluquería móvil',
      description:
        'Monarca Grooming ofrece peluquería móvil suave y sin estrés para perros y gatos en Florida. Con más de veinte <br class="hidden md:block"/> años de experiencia familiar, ofrecemos un manejo tranquilo, cuidado premium y resultados consistentes en la puerta de tu casa.',
      items: [
        {
          with: '309',
          height: '345',
          image: 'dog-grooming',
          title: 'Peluquería móvil para perros',
          description: 'Peluquería profesional a domicilio',
          button: {
            label: 'Ver servicio',
            href: '/mobile-dog-grooming',
          },
        },
        {
          with: '315',
          height: '311',
          image: 'cat-grooming',
          title: 'Peluquería móvil para gatos',
          description: 'Peluquería tranquila y delicada para gatos en tu hogar',
          button: {
            label: 'Ver servicio',
            href: '/mobile-cat-grooming',
          },
        },
        {
          with: '305',
          height: '352',
          image: 'dog-dental',
          title: 'Limpieza Dental Perros',
          description: 'Cuidado dental profesional para perros',
          button: {
            label: 'Ver servicio',
            href: '/dental-cleaning',
          },
        },
        {
          with: '294',
          height: '303',
          image: 'cat-dental',
          title: 'Limpieza Dental Gatos',
          description: 'Cuidado dental profesional para gatos',
          button: {
            label: 'Ver servicio',
            href: '/dental-cleaning',
          },
        },
      ],
    },
    information: {
      title: 'Brinda confort y cuidado a tu mascota',
      description:
        'Programa tu cita de peluquería móvil con Monarca Grooming y disfruta de una experiencia suave y sin estrés en casa. Nuestro equipo aporta experiencia, paciencia y un manejo tranquilo para cada perro y gato que atendemos en Florida.',
      buttons: [
        {
          label: 'Llama Ya!',
          href: '/tel:+19548684929',
          color: 'secondary',
        },
        {
          label: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
          color: 'primary',
        },
      ],
    },
  },
  services: {
    'mobile-dog-grooming': {
      hero: {
        image: {
          href: 'dog-1',
          width: '575',
          height: '536',
        },
        subtitle: 'Cuidado tranquilo y personalizado en tu hogar',
        title: 'Peluquería móvil para perros',
        description:
          'Tu perro disfruta de una sesión de peluquería tranquila justo en la puerta de tu casa. Nuestro equipo, formado en familia, aporta más de veinte años de experiencia para ofrecer un manejo cariñoso, resultados limpios y un estilo que se adapta al pelaje y la personalidad de tu perro. Los servicios incluyen baño, secado, cepillado, corte completo o recorte, corte de uñas, limpieza de oídos y cuidado sanitario y de almohadillas.',
        text1: 'Por qué los dueños de mascotas eligen Monarca',
        items: [
          'Atención individual para una visita relajada',
          'Mayor comodidad y confianza después de cada sesión',
          'Estilo fiel a la raza y acabado cuidado',
          'Piel limpia y pelaje saludable y brillante',
        ],
        button: {
          title: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
        },
      },
      included: {
        title: 'Qué incluye nuestro servicio de peluquería móvil para perros',
        items: [
          {
            title: 'Baño tibio con champú suave',
            description:
              'Limpia el pelaje de tu perro manteniendo la piel sana y suave con champú suave.',
            icon: 'warm',
          },
          {
            title: 'Secado y cepillado en profundidad',
            description:
              'Seca y desenreda el pelaje, dejándolo liso, brillante y completamente libre de nudos o enredos.',
            icon: 'blow',
          },
          {
            title: 'Corte y peinado (raza o personalizado)',
            description:
              'Realizamos corte pulcro por raza o personalizado que se adapte a su personalidad y vida.',
            icon: 'haircut',
          },
          {
            title: 'Corte de uñas y cuidado de almohadillas',
            description:
              'Mantiene las uñas a longitud segura y las almohadillas suaves y saludables para comodidad y movilidad.',
            icon: 'nail',
          },
          {
            title: 'Limpieza de oídos',
            description:
              'Elimina suciedad y cerumen, previene infecciones y mantiene la salud del oído.',
            icon: 'ear',
          },
          {
            title: 'Y más servicios',
            description:
              'Ofrecemos opciones adicionales de peluquería; llama o envíanos un mensaje para saber cómo personalizar el cuidado de tu perro.',
            icon: 'nail',
          },
        ],
        image: {
          href: 'dog-2',
          width: '625',
          height: '591',
        },
      },
      process: {
        title: 'Un proceso sencillo y cuidadoso',
        description:
          'En solo 3 sencillos pasos, su mascota disfrutará de una experiencia de aseo tranquila y suave.',
        items: [
          {
            icon: 'process-1',
            back: 'bg-primary',
            title: '1. Reserva fácil',
            description:
              'Agendamos tu cita a través de nuestro sistema y confirmamos todos los detalles para garantizar una experiencia fluida y sin estrés para ti y tu mascota.',
            image: 'bg-process-1',
          },
          {
            icon: 'process-2',
            back: 'bg-secondary',
            title: '2. Nosotros vamos a ti',
            description:
              'Nuestra unidad móvil totalmente equipada llega a tu hogar con todo lo necesario para arreglar a tu mascota de forma segura, tranquila y cómoda.',
            image: 'bg-process-2',
          },
          {
            icon: 'process-3',
            back: 'bg-primary',
            title: '3. Peluquería profesional y con cariño',
            description:
              'Tu mascota recibe un cuidado paciente, profesional y de alta calidad, guiado por más de veinte años de experiencia familiar y un genuino amor por los animales.',
            image: 'bg-process-3',
          },
        ],
      },
      information: {
        title: 'Brinda confort y cuidado a tu mascota',
        description:
          'Programa tu cita de peluquería móvil con Monarca Grooming y disfruta de una experiencia suave y sin estrés en casa. Nuestro equipo aporta experiencia, paciencia y un manejo tranquilo para cada perro y gato que atendemos en Florida.',
        buttons: [
          {
            label: 'Llama Ya!',
            href: '/tel:+19548684929',
            color: 'secondary',
          },
          {
            label: 'Reservar Ya!',
            href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
            color: 'primary',
          },
        ],
      },
      title: ' ',
    },
    'mobile-cat-grooming': {
      hero: {
        image: {
          href: 'cat-1',
          width: '626',
          height: '525',
        },
        subtitle: 'Peluquería delicada diseñada para la comodidad de tu gato',
        title: 'Peluquería móvil para gatos',
        description:
          'Nuestro servicio móvil de peluquería para gatos ofrece un manejo calmado y una rutina tranquila directamente en tu hogar. Utilizamos técnicas suaves, equipos silenciosos y atención paciente para que tu gato se mantenga limpio, cómodo y perfectamente arreglado. Tanto si tu gato tiene pelo largo como corto, hacemos la peluquería más fácil, segura y menos estresante para ambos.',
        text1: 'Por qué los dueños de mascotas eligen Monarca',
        items: [
          'Reduce la muda y las bolas de pelo',
          'Favorece la salud de la piel y el pelaje',
          'Previene los enredos',
          'Crea una experiencia de peluquería más calmada',
        ],
        button: {
          title: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
        },
      },
      included: {
        title: 'Qué incluye nuestro servicio de peluquería móvil para gatos',
        items: [
          {
            title: 'Baño tibio con champú calmante',
            description:
              'Limpia el pelaje de tu gato con suavidad, manteniendo la piel sana y sedosa con champú calmante.',
            icon: 'warm',
          },
          {
            title: 'Secado y cepillado completo',
            description:
              'Seca y desenreda el pelaje, dejándolo suave, brillante y libre de nudos, manteniendo al gato tranquilo.',
            icon: 'blow',
          },
          {
            title: 'Corte y peinado (raza o personalizado)',
            description:
              'Realizamos cortes apropiados al pelaje o personalizados para su comodidad y carácter.',
            icon: 'haircut',
          },
          {
            title: 'Corte de uñas y cuidado de almohadillas',
            description:
              'Mantiene las uñas a longitud segura y las almohadillas saludables para una movilidad cómoda.',
            icon: 'nail',
          },
          {
            title: 'Limpieza de oídos',
            description:
              'Elimina suciedad y cerumen de forma segura, ayudando a prevenir infecciones y cuidar la salud del oído.',
            icon: 'ear',
          },
          {
            title: 'Y más servicios',
            description:
              'Ofrecemos opciones adicionales de peluquería; llámanos o envíanos un mensaje para personalizar el cuidado de tu gato.',
            icon: 'nail',
          },
        ],
        image: {
          href: 'cat-2',
          width: '505',
          height: '644',
        },
      },
      process: {
        title: 'Un proceso sencillo y cuidadoso',
        description:
          'En solo 3 sencillos pasos, su mascota disfrutará de una experiencia de aseo tranquila y suave.',
        items: [
          {
            icon: 'process-1',
            back: 'bg-primary',
            title: '1. Reserva fácil',
            description:
              'Agendamos tu cita a través de nuestro sistema y confirmamos todos los detalles para garantizar una experiencia fluida y sin estrés para ti y tu mascota.',
            image: 'bg-process-1',
          },
          {
            icon: 'process-2',
            back: 'bg-secondary',
            title: '2. Nosotros vamos a ti',
            description:
              'Nuestra unidad móvil totalmente equipada llega a tu hogar con todo lo necesario para arreglar a tu mascota de forma segura, tranquila y cómoda.',
            image: 'bg-process-2',
          },
          {
            icon: 'process-3',
            back: 'bg-primary',
            title: '3. Peluquería profesional y con cariño',
            description:
              'Tu mascota recibe un cuidado paciente, profesional y de alta calidad, guiado por más de veinte años de experiencia familiar y un genuino amor por los animales.',
            image: 'bg-process-3',
          },
        ],
      },
      information: {
        title: 'Brinda confort y cuidado a tu mascota',
        description:
          'Programa tu cita de peluquería móvil con Monarca Grooming y disfruta de una experiencia suave y sin estrés en casa. Nuestro equipo aporta experiencia, paciencia y un manejo tranquilo para cada perro y gato que atendemos en Florida.',
        buttons: [
          {
            label: 'Llama Ya!',
            href: '/tel:+19548684929',
            color: 'secondary',
          },
          {
            label: 'Reservar ahora',
            href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
            color: 'primary',
          },
        ],
      },
      title: ' ',
    },
    'dental-cleaning': {
      hero: {
        image: {
          href: 'dental-1',
          width: '612',
          height: '514',
        },
        subtitle: 'Cuidado tranquilo y personalizado en tu hogar',
        title: 'Limpieza dental sin anestesia',
        description:
          'Nuestra limpieza dental sin anestesia mantiene la salud bucal de tu mascota de forma segura y suave, sin los riesgos asociados a la anestesia. Este servicio elimina placa y sarro mientras tu mascota permanece calmada y cómoda, ayudando a prevenir enfermedad de las encías, mal aliento y problemas dentales futuros. Ideal para mantenimiento dental rutinario en un entorno móvil sin estrés.',
        text1: 'Por qué los dueños eligen Monarca',
        items: [
          'Reduce placa y sarro sin riesgos de anestesia',
          'Ayuda a prevenir enfermedad de las encías y pérdida dental',
          'Mejora el aliento y la higiene oral general',
          'Menos estrés con un enfoque móvil, suave y personalizado',
        ],
        button: {
          title: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
        },
      },
      included: {
        title: 'Qué incluye nuestro servicio de limpieza dental',
        items: [
          {
            title: 'Evaluación oral',
            description:
              'Examen visual suave de los dientes y encías de su mascota para valorar placa y salud bucal.',
            icon: 'warm',
          },
          {
            title: 'Eliminación de placa y sarro',
            description:
              'Retiro cuidadoso de placa y sarro para proteger los dientes y reducir el riesgo de enfermedad gingival.',
            icon: 'blow',
          },
          {
            title: 'Limpieza de encías',
            description:
              'Limpieza focal en la línea de encías para favorecer encías sanas y prevenir la inflamación.',
            icon: 'haircut',
          },
          {
            title: 'Mejora del aliento',
            description:
              'Reduce el mal aliento al tratar las causas dentales más comunes.',
            icon: 'nail',
          },
          {
            title: 'Manejo individual tranquilo',
            description:
              'Realizado con manejo paciente y gentil para mantener a su mascota relajada y cómoda.',
            icon: 'ear',
          },
          {
            title: 'Recomendaciones dentales',
            description:
              'Guía personalizada para el cuidado dental en casa y mantener la salud bucal entre limpiezas.',
            icon: 'nail',
          },
        ],
        image: {
          href: 'cat-2',
          width: '505',
          height: '644',
        },
      },
      process: {
        title: 'Un proceso sencillo y cuidadoso',
        description:
          'En solo 3 pasos sencillos, tu mascota disfrutará de una experiencia calmada y cuidadosa.',
        items: [
          {
            icon: 'process-1',
            back: 'bg-primary',
            title: '1. Reserva fácil',
            description:
              'Agendamos tu cita y confirmamos todos los detalles para garantizar una experiencia fluida y sin estrés.',
            image: 'bg-process-1',
          },
          {
            icon: 'process-2',
            back: 'bg-secondary',
            title: '2. Nosotros vamos a ti',
            description:
              'Nuestra unidad móvil llega equipada a tu hogar con todo lo necesario para atender a tu mascota de forma segura y cómoda.',
            image: 'bg-process-2',
          },
          {
            icon: 'process-3',
            back: 'bg-primary',
            title: '3. Limpieza profesional y con cariño',
            description:
              'Tu mascota recibe un cuidado paciente y profesional, guiado por más de veinte años de experiencia familiar y amor por los animales.',
            image: 'bg-process-3',
          },
        ],
      },
      information: {
        title: 'Brinda confort y cuidado a tu mascota',
        description:
          'Programa tu limpieza dental móvil con Monarca Grooming y disfruta de un servicio suave y seguro en casa. Nuestro equipo aporta experiencia, paciencia y manejo tranquilo en cada visita.',
        buttons: [
          {
            label: 'Llama Ya!',
            href: '/tel:+19548684929',
            color: 'secondary',
          },
          {
            label: 'Reservar Ya!',
            href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
            color: 'primary',
          },
        ],
      },
      title: 'Ve la diferencia',
    },
  },
  about: {
    hero: {
      title: 'Sobre Monarca Grooming',
      description:
        'Monarca Grooming nació de más de veinte años de experiencia familiar, amor por los animales y un viaje profundamente personal. Lo que <span class="font-semibold">comenzó hace años con Sandra aprendiendo </span> a bañar perros después del colegio se transformó en una vocación de por vida forjada por la dedicación, la compasión y el conocimiento práctico.',
      paragraph: [
        '<span class="font-semibold">En 2022, tras la desgarradora pérdida de ambos padres en días consecutivos, Sandra convirtió su dolor en propósito </span>. Con coraje, resistencia y el deseo de honrar a su familia, inició un nuevo capítulo en Estados Unidos. Aquí fue donde Monarca Grooming despegó, un servicio de peluquería móvil creado no solo para arreglar mascotas, sino para tocar vidas con empatía, paciencia y sinceridad.',
        'Después de trabajar codo a codo con su <span class="font-semibold">hermano mayor</span> en la industria de la peluquería y de <span class="font-semibold">ayudar a expandir varios</span> centros de cuidado de mascotas <span class="font-semibold">en Colombia, Sandra construyó una</span> base de profesionalismo y sensibilidad emocional que ningún curso podría enseñar. Su experiencia incluye peluquería, atención al cliente, operaciones, formación de nuevos peluqueros y la gestión de cada detalle detrás de un negocio de cuidado animal exitoso.',
      ],
    },
    results: {
      title2: 'Nuestros certificados',
      title: 'Mascotas felices. Resultados hermosos.',
      description:
        'Mira nuestras últimas transformaciones, mascotas felices y momentos reales de nuestras jornadas de peluquería. Cada foto recuerda nuestra misión de ofrecer calma, confort y resultados hermosos para cada perro y gato que atendemos en Florida. Actualizado a menudo con clientes reales, sonrisas reales y peluquería hecha con corazón.',
    },
    information: {
      title: 'Brinda confort y cuidado a tu mascota',
      description:
        'Programa tu cita de peluquería móvil con Monarca Grooming y disfruta de una experiencia suave y sin estrés en casa. Nuestro equipo aporta experiencia, paciencia y un manejo tranquilo para cada perro y gato que atendemos en Florida.',
      buttons: [
        {
          label: 'Llama Ya!',
          href: '/tel:+19548684929',
          color: 'secondary',
        },
        {
          label: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
          color: 'primary',
        },
      ],
    },
  },
  faq: {
    title: 'Preguntas Frecuentes',
    questions: [
      {
        title: '¿Ustedes vienen a mi casa?',
        answer:
          'Sí. Somos un servicio de peluquería 100% móvil. Nuestra furgoneta totalmente equipada llega directamente a su domicilio para atender a su perro o gato de forma segura, cómoda y sin estrés.',
      },
      {
        title: '¿Cuánto dura una sesión de peluquería?',
        answer:
          'La duración depende del tamaño, raza, estado del pelaje y necesidades de su mascota. En promedio, una sesión dura entre 1 y 2 horas.',
      },
      {
        title: '¿Asean a gatos?',
        answer:
          'Sí, ofrecemos servicio de peluquería para gatos. Cada cita se evalúa previamente para garantizar una experiencia segura y tranquila según el temperamento del gato.',
      },
      {
        title: '¿Necesito estar en casa durante la cita?',
        answer:
          'No es necesario. Solo requerimos acceso a su mascota y un espacio adecuado para estacionar la furgoneta cerca de su hogar.',
      },
      {
        title: '¿Qué zonas atienden?',
        answer:
          'Atendemos zonas de Palm Beach y el condado de Broward, incluyendo Boca Raton, Delray Beach, Boynton Beach y áreas cercanas.',
      },
      {
        title: '¿Cómo reservo una cita?',
        answer:
          'Puede reservar fácilmente contactándonos por WhatsApp, redes sociales o mediante nuestro sistema de reservas en línea.',
      },
      {
        title: '¿Qué pasa si mi mascota está ansiosa o nerviosa?',
        answer:
          'Contamos con más de 15 años de experiencia atendiendo mascotas ansiosas. Nuestro servicio móvil, uno a uno y sin jaulas, ayuda a reducir considerablemente el estrés y la ansiedad.',
      },
      {
        title: '¿Limpian la furgoneta entre citas?',
        answer:
          'Sí. Nuestra furgoneta se limpia y desinfecta a fondo entre cada cita para garantizar un entorno seguro e higiénico.',
      },
      {
        title: '¿Qué pasa si necesito cancelar o reprogramar?',
        answer:
          'Puede cancelar o reprogramar avisándonos con antelación. Le rogamos que nos contacte lo antes posible para que podamos ajustar nuestra agenda.',
      },
    ],
    information: {
      title: 'Si Necesitas Más Ayuda',
      description:
        'Sabemos que cada mascota es única. Si necesitas orientación personal, tienes preguntas sobre la peluquería o quieres ayuda para elegir el servicio adecuado para tu perro o gato, estamos aquí para ti. Tu tranquilidad siempre es nuestra prioridad.',
      buttons: [
        {
          label: 'Llama Ya!',
          href: '/tel:+19548684929',
          color: 'secondary',
        },
        {
          label: 'Reservar Ya!',
          href: 'https://booking.moego.pet/ol/book?name=MonarcaGroomingLLC',
          color: 'primary',
        },
      ],
    },
  },
  gallery: {
    title: 'Galería',
    description:
      'Galería de transformaciones reales de Monarca Grooming. Mascotas calmadas, limpias y  radiantes después de nuestros <br class="hidden md:block"/> servicios móviles de peluquería a domicilio en toda Florida.',
  },
  error:{
    title: 'Disculpa! La pagina que buscas no se encuentra disponible',
    description:
      'La página que buscas no existe. Puede que haya sido movida o eliminada.',
    button:"Volver al Inicio",
  },
  footer: {
    description: '+ 15 años de experiencia ',
    service: {
      title: 'Servicios',
      items: [
        {
          title: 'Peluquería móvil para perros',
          href: 'mobile-dog-grooming',
        },
        {
          title: 'Peluquería móvil para gatos',
          href: 'mobile-cat-grooming',
        },
        {
          title: 'Limpieza dental sin anestesia',
          href: 'dental-cleaning',
        },
      ],
    },
    schedules: {
      title: 'Horario',
      items: ['Lunes - Domingo', '8:00 AM - 6:00 PM', 'Política de cookies'],
    },
    contact: {
      title: 'Contáctanos',
      items: [
        {
          icon: 'map-1',
          text: 'Atendemos toda la Florida.',
          href: '#',
        },
        {
          icon: 'mail-1',
          text: 'Monarca.grooming@gmail.com',
          href: 'https://mail.google.com/mail/?view=cm&fs=1&to=Monarca.grooming@gmail.com',
        },
        {
          icon: 'phone-1',
          text: '(954) 868-4929',
          href: 'tel:+19548684929',
        },
      ],
    },
  },
};
