/* =========================================================
   CONDICIÓN 3 – ASPECTOS CURRICULARES (DECRETO 1330 · ART. 2.5.3.2.3.2.4)
   Marketing Digital · Registro Calificado Nuevo · Registro Único (Presencial & Virtual) · TO
   Plan de Estudios Oficial: 144 Créditos · 8 Semestres · 48 Asignaturas (3 Cr c/u)
   Subpestañas Canónicas:
     a) Componentes Formativos
     b) Componentes Pedagógicos
     c) Componentes de Interacción
     d) Conceptualización Teórica y Epistemológica
     e) Mecanismos de Evaluación
   ========================================================= */

window.SECTIONS = window.SECTIONS || {};

// Función global de alternancia de subsecciones en píldoras (Sub-Pills)
window.switchSubSection = window.switchSubSection || function(prefix, secId) {
    const pillsContainer = document.getElementById(prefix + '-pills');
    if (pillsContainer) {
        pillsContainer.querySelectorAll('.pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-sub') === `${prefix}-${secId}`);
        });
    }
    const container = document.getElementById(prefix + '-container');
    if (container) {
        Array.from(container.children).forEach(panel => {
            if (panel.id === `${prefix}-${secId}`) {
                panel.style.display = 'block';
                panel.classList.add('active');
            } else if (panel.classList && panel.classList.contains('sub-panel')) {
                panel.style.display = 'none';
                panel.classList.remove('active');
            }
        });
    }
    if (secId === 'malla' && typeof window.renderMktMallaGrid === 'function') {
        setTimeout(window.renderMktMallaGrid, 50);
    }
};

window.C3_SUBJECTS = [{"id": "SE101", "semestre": 1, "sem": 1, "bloque": "B1 (S1-S8)", "nombre": "Cátedra de la Paz", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Cátedra de la Paz desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 7: Ética, Protección de Datos Personales, Ciberseguridad y Responsabilidad Social.", "rap_asociado": "RAP 1.1: Analiza los principios de cultura de paz y los aplica en contextos académicos y digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Cátedra de la Paz en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Cátedra de la Paz para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Cátedra de la Paz."], "contenidos": "Fundamentos de cultura de paz, derechos humanos, resolución pacífica de conflictos, diálogo intercultural y convivencia ciudadana.", "actividades_desc": "Foro virtual sobre cultura de paz · Análisis de casos de resolución de conflictos · Elaboración de propuesta de acción comunitaria.", "eval_estrategia": "Ensayo reflexivo", "eval_desc": "Análisis crítico de problemáticas sociales y construcción de propuestas de convivencia y ciudadanía digital.", "eval_herramientas": "Rúbrica, foro, documento escrito", "raa": "Analiza los principios de cultura de paz y los aplica en contextos académicos y digitales.", "enfoque_sem": "Contribuye a la formación ética y ciudadana del estudiante, fortaleciendo valores de convivencia, respeto y responsabilidad social desde el inicio del proceso formativo.", "perfil_docente": "Profesional en Ciencias Sociales, Educación, Derecho o afines con posgrado y experiencia en formación ciudadana y manejo de LMS.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Cátedra de la Paz", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Cátedra de la Paz en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Cátedra de la Paz."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Cátedra de la Paz", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Cátedra de la Paz para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Cátedra de la Paz."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Cátedra de la Paz", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Cátedra de la Paz.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Cátedra de la Paz."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE102", "semestre": 1, "sem": 1, "bloque": "B1 (S1-S8)", "nombre": "Fundamentos de Marketing Digital", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Fundamentos de Marketing Digital desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 1.2: Comprende los fundamentos del marketing digital y su aplicación en los ecosistemas digitales actuales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos de Marketing Digital en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos de Marketing Digital para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos de Marketing Digital."], "contenidos": "Conceptos básicos del marketing, evolución del mercado tradicional al digital (Marketing 1.0 a 5.0), ecosistemas digitales, STP, mezcla 4P/4C y comportamiento del consumidor en línea.", "actividades_desc": "Lecturas guiadas sobre tendencias digitales · Diseño de mapa conceptual del marketing digital · Análisis de casos de estrategias exitosas.", "eval_estrategia": "Estudio de caso", "eval_desc": "Proyecto diagnóstico de presencia digital de una marca en entornos virtuales.", "eval_herramientas": "Rúbrica, presentación digital", "raa": "Comprende los fundamentos del marketing digital y su aplicación en los ecosistemas digitales actuales.", "enfoque_sem": "Introduce los conceptos básicos del marketing digital, permitiendo al estudiante comprender el campo disciplinar y su relevancia en el entorno empresarial actual.", "perfil_docente": "Profesional en Marketing, Comunicación o Administración con posgrado en marketing digital y experiencia en estrategias digitales.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Marketing Digital", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos de Marketing Digital en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Marketing Digital."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Marketing Digital", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos de Marketing Digital para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Marketing Digital."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Marketing Digital", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos de Marketing Digital.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Marketing Digital."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE103", "semestre": 1, "sem": 1, "bloque": "B1 (S1-S8)", "nombre": "Fundamentos Contables", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Fundamentos Contables desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 1.3: Aplica principios contables en la interpretación de la información financiera empresarial.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos Contables en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos Contables para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos Contables."], "contenidos": "Principios contables básicos, marco NIIF, partida doble, registro de operaciones, balance de comprobación, análisis de estados financieros e interpretación de indicadores económicos.", "actividades_desc": "Taller práctico de registros contables · Simulación de balance general · Foro sobre decisiones financieras.", "eval_estrategia": "Taller aplicado", "eval_desc": "Resolución de ejercicios contables básicos y examen aplicado con estudio de caso financiero.", "eval_herramientas": "Guías, hojas de cálculo", "raa": "Aplica principios contables en la interpretación de la información financiera empresarial.", "enfoque_sem": "Brinda nociones básicas sobre el manejo de información financiera, necesarias para comprender la dinámica económica de las organizaciones.", "perfil_docente": "Contador Público o Administrador con posgrado en finanzas o contabilidad y dominio de software contable.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos Contables", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos Contables en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos Contables."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos Contables", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos Contables para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos Contables."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos Contables", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos Contables.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos Contables."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE104", "semestre": 1, "sem": 1, "bloque": "B2 (S9-S16)", "nombre": "Competencias Digitales", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Competencias Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 3: Ecosistemas Tecnológicos, MarTech, CRM y Automatización de Procesos.", "rap_asociado": "RAP 1.1: Utiliza herramientas digitales de manera ética y productiva en entornos académicos y profesionales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Competencias Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Competencias Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Competencias Digitales."], "contenidos": "Herramientas TIC, alfabetización digital, gestión de información en la nube, entornos colaborativos Microsoft 365, seguridad y ética digital.", "actividades_desc": "Taller de uso de herramientas en la nube · Creación de portafolio digital inicial · Debate sobre ciudadanía digital.", "eval_estrategia": "Proyecto práctico", "eval_desc": "Portafolio digital con evidencias de uso productivo de herramientas tecnológicas.", "eval_herramientas": "Lista de chequeo, portafolio digital", "raa": "Utiliza herramientas digitales de manera ética y productiva en entornos académicos y profesionales.", "enfoque_sem": "Desarrolla habilidades iniciales en el uso de herramientas tecnológicas y plataformas digitales, fundamentales para ambas modalidades y el entorno profesional.", "perfil_docente": "Ingeniero de Sistemas o profesional en áreas digitales con posgrado en TIC o Big Data.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Competencias Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Competencias Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Competencias Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Competencias Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Competencias Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Competencias Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Competencias Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Competencias Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Competencias Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE105", "semestre": 1, "sem": 1, "bloque": "B2 (S9-S16)", "nombre": "Matemática", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "Ninguno", "moodle": "En cronograma de producción ADDIE", "descripcion": "La asignatura Matemática desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 1.2: Emplea operaciones y razonamientos matemáticos en el análisis básico de datos del entorno digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Matemática en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Matemática para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Matemática."], "contenidos": "Fundamentos de aritmética, proporciones, porcentajes, álgebra básica, funciones, estadística descriptiva y análisis cuantitativo de datos aplicados al marketing.", "actividades_desc": "Resolución de ejercicios en línea · Taller de problemas aplicados a marketing · Evaluación diagnóstica y formativa.", "eval_estrategia": "Prueba aplicada", "eval_desc": "Prueba práctica con aplicación de fórmulas, proporciones y análisis cuantitativo de datos.", "eval_herramientas": "Cuestionario en línea, hoja de cálculo", "raa": "Emplea operaciones y razonamientos matemáticos en el análisis básico de datos del entorno digital.", "enfoque_sem": "Fortalece el razonamiento lógico y el análisis cuantitativo, esenciales para la comprensión de métricas y datos en etapas posteriores del programa.", "perfil_docente": "Licenciado en Matemáticas, Estadístico o Ingeniero con posgrado y experiencia en docencia universitaria.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Matemática", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Matemática en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Matemática."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Matemática", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Matemática para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Matemática."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Matemática", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Matemática.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Matemática."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE106", "semestre": 1, "sem": 1, "bloque": "B2 (S9-S16)", "nombre": "Fundamentos de Administración", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Fundamentos de Administración desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 6: Gestión Estratégica, Dirección de Marcas Digitales y Emprendimiento.", "rap_asociado": "RAP 1.3: Reconoce los fundamentos de la administración y su aplicación en organizaciones del entorno digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos de Administración en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos de Administración para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos de Administración."], "contenidos": "Teorías administrativas, funciones gerenciales, planeación, organización, dirección, liderazgo y control en empresas tradicionales y digitales.", "actividades_desc": "Lectura crítica de textos clásicos y contemporáneos de administración · Estudio de caso sobre estructura organizacional · Foro sobre liderazgo digital.", "eval_estrategia": "Caso empresarial", "eval_desc": "Análisis comparativo de modelos de gestión y funciones administrativas en organizaciones reales.", "eval_herramientas": "Rúbrica, informe escrito", "raa": "Reconoce los fundamentos de la administración y su aplicación en organizaciones del entorno digital.", "enfoque_sem": "Introduce al estudiante en los principios de la gestión administrativa y organizacional, contextualizando el marketing dentro de la empresa.", "perfil_docente": "Administrador de Empresas o Ingeniero Industrial con Maestría o Doctorado en Ciencias Económicas y Administrativas.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Administración", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos de Administración en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Administración."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Administración", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos de Administración para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Administración."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Administración", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos de Administración.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Administración."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE201", "semestre": 2, "sem": 2, "bloque": "B1 (S1-S8)", "nombre": "Comunicación y Ecosistemas Digitales", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE102 - Fundamentos de Marketing Digital", "moodle": "En cronograma de producción ADDIE (Fase 1)", "descripcion": "La asignatura Comunicación y Ecosistemas Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 2.1: Analiza los procesos comunicativos y su impacto en los ecosistemas digitales contemporáneos.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Comunicación y Ecosistemas Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Comunicación y Ecosistemas Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Comunicación y Ecosistemas Digitales."], "contenidos": "Ecosistemas mediáticos digitales, sociedad red (Castells), convergencia mediática (Jenkins), interactividad, comunidades digitales y cultura participativa.", "actividades_desc": "Análisis de casos de comunicación digital · Debate sobre cultura participativa · Diseño de mapa de ecosistema comunicativo.", "eval_estrategia": "Análisis de entorno digital", "eval_desc": "Informe diagnóstico de ecosistemas comunicativos digitales aplicados a marcas o proyectos.", "eval_herramientas": "Rúbrica, mapa digital", "raa": "Analiza los procesos comunicativos y su impacto en los ecosistemas digitales contemporáneos.", "enfoque_sem": "Permite analizar la dinámica comunicativa entre marcas, audiencias y plataformas, comprendiendo los ecosistemas digitales como sistemas interconectados.", "perfil_docente": "Comunicador Social o profesional en Marketing con posgrado y experiencia en ecosistemas digitales.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Comunicación y Ecosistemas Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Comunicación y Ecosistemas Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Comunicación y Ecosistemas Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Comunicación y Ecosistemas Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Comunicación y Ecosistemas Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Comunicación y Ecosistemas Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Comunicación y Ecosistemas Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Comunicación y Ecosistemas Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Comunicación y Ecosistemas Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE202", "semestre": 2, "sem": 2, "bloque": "B2 (S9-S16)", "nombre": "Bioética, Globalización y Economía", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Bioética, Globalización y Economía desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 2.2: Reflexiona críticamente sobre las implicaciones éticas, económicas y sociales del ejercicio profesional en entornos digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Bioética, Globalización y Economía en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Bioética, Globalización y Economía para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Bioética, Globalización y Economía."], "contenidos": "Principios de bioética, ética profesional, globalización económica, ciudadanía digital, derechos digitales y responsabilidad social en entornos tecnológicos.", "actividades_desc": "Lectura crítica de dilemas éticos digitales · Foro sobre responsabilidad digital · Ensayo sobre ética en redes sociales y economía global.", "eval_estrategia": "Foro argumentativo y ensayo", "eval_desc": "Ensayo argumentativo sobre dilemas éticos y globalización en el ejercicio del marketing digital.", "eval_herramientas": "Foro evaluado, rúbrica", "raa": "Reflexiona críticamente sobre las implicaciones éticas, económicas y sociales del ejercicio profesional en entornos digitales.", "enfoque_sem": "Introduce principios éticos aplicados al uso de tecnologías, datos y comunicación digital en una economía globalizada.", "perfil_docente": "Profesional en Humanidades, Economía, Educación o Derecho con posgrado e investigación ética o social.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Bioética, Globalización y Economía", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Bioética, Globalización y Economía en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Bioética, Globalización y Economía."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Bioética, Globalización y Economía", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Bioética, Globalización y Economía para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Bioética, Globalización y Economía."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Bioética, Globalización y Economía", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Bioética, Globalización y Economía.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Bioética, Globalización y Economía."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE203", "semestre": 2, "sem": 2, "bloque": "B1 (S1-S8)", "nombre": "Estrategia y Branding en Entornos Digitales", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE102 - Fundamentos de Marketing Digital", "moodle": "En cronograma de producción ADDIE (Fase 1)", "descripcion": "La asignatura Estrategia y Branding en Entornos Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 2.3: Diseña estrategias de branding que fortalezcan la identidad digital de productos, servicios u organizaciones.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Estrategia y Branding en Entornos Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Estrategia y Branding en Entornos Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Estrategia y Branding en Entornos Digitales."], "contenidos": "Conceptos de marca, arquetipos, identidad verbal y visual, propuesta de valor, posicionamiento, gestión de marca digital (Brand Equity) y branding emocional.", "actividades_desc": "Taller de construcción de identidad de marca · Análisis de casos de branding digital · Presentación de estrategia de posicionamiento.", "eval_estrategia": "Proyecto de marca", "eval_desc": "Proyecto integral de diseño de estrategia de marca digital y manual de branding.", "eval_herramientas": "Rúbrica, presentación ejecutiva", "raa": "Diseña estrategias de branding que fortalezcan la identidad digital de productos, servicios u organizaciones.", "enfoque_sem": "Desarrolla la capacidad de aplicar fundamentos estratégicos para la creación y posicionamiento de marcas en medios digitales.", "perfil_docente": "Profesional en Marketing o Publicidad con posgrado y experiencia comprobada en dirección de marca (Brand Management).", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estrategia y Branding en Entornos Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Estrategia y Branding en Entornos Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Estrategia y Branding en Entornos Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estrategia y Branding en Entornos Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Estrategia y Branding en Entornos Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Estrategia y Branding en Entornos Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Estrategia y Branding en Entornos Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Estrategia y Branding en Entornos Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Estrategia y Branding en Entornos Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE204", "semestre": 2, "sem": 2, "bloque": "B2 (S9-S16)", "nombre": "Fundamentos de Publicidad y Medios Digitales", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Fundamentos de Publicidad y Medios Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 2.1: Aplica principios de publicidad y segmentación en medios digitales para la comunicación efectiva de marca.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos de Publicidad y Medios Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos de Publicidad y Medios Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos de Publicidad y Medios Digitales."], "contenidos": "Principios de publicidad digital, ecosistema de medios online (Paid, Owned, Earned), planificación de medios, formatos publicitarios, segmentación y audiencias.", "actividades_desc": "Taller de planificación de medios digitales · Análisis de campañas publicitarias online · Simulación de segmentación en plataformas.", "eval_estrategia": "Campaña simulada", "eval_desc": "Diseño de un plan de medios publicitarios digitales y pieza creativa básica.", "eval_herramientas": "Rúbrica, pieza digital", "raa": "Aplica principios de publicidad y segmentación en medios digitales para la comunicación efectiva de marca.", "enfoque_sem": "Introduce la planificación y gestión básica de medios digitales, integrando conceptos de publicidad y difusión de mensajes.", "perfil_docente": "Profesional en Publicidad, Mercadeo o Comunicación con posgrado y manejo de gestores de anuncios digitales.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Fundamentos de Publicidad y Medios Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Fundamentos de Publicidad y Medios Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Fundamentos de Publicidad y Medios Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Fundamentos de Publicidad y Medios Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Fundamentos de Publicidad y Medios Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Fundamentos de Publicidad y Medios Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Fundamentos de Publicidad y Medios Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Fundamentos de Publicidad y Medios Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Fundamentos de Publicidad y Medios Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE205", "semestre": 2, "sem": 2, "bloque": "B1 (S1-S8)", "nombre": "Diseño y Experiencia de Usuario (UX/UI)", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE104 - Matemáticas Aplicadas al Marketing", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Diseño y Experiencia de Usuario (UX/UI) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 2.2: Diseña experiencias e interfaces digitales centradas en las necesidades y comportamiento del usuario.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Diseño y Experiencia de Usuario (UX/UI) en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Diseño y Experiencia de Usuario (UX/UI) para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Diseño y Experiencia de Usuario (UX/UI)."], "contenidos": "Principios de usabilidad, arquitectura de la información, wireframing, diseño centrado en el usuario (Design Thinking), accesibilidad digital WCAG y pruebas de experiencia.", "actividades_desc": "Prototipado de interfaces digitales en Figma · Análisis heurístico de experiencia de usuario · Prueba de usabilidad con usuarios.", "eval_estrategia": "Prototipo funcional", "eval_desc": "Diseño y validación de prototipo funcional interactivo UX/UI centrado en el usuario.", "eval_herramientas": "Figma, Adobe Creative Cloud, rúbrica", "raa": "Diseña experiencias e interfaces digitales centradas en las necesidades y comportamiento del usuario.", "enfoque_sem": "Aplica principios de diseño centrado en el usuario, integrando funcionalidad, usabilidad y conversión digital.", "perfil_docente": "Diseñador Gráfico, Multimedia o Ingeniero con posgrado y dominio de Figma, Adobe XD y metodologías UX/UI.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Diseño y Experiencia de Usuario (UX/UI)", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Diseño y Experiencia de Usuario (UX/UI) en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Diseño y Experiencia de Usuario (UX/UI)."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Diseño y Experiencia de Usuario (UX/UI)", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Diseño y Experiencia de Usuario (UX/UI) para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Diseño y Experiencia de Usuario (UX/UI)."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Diseño y Experiencia de Usuario (UX/UI)", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Diseño y Experiencia de Usuario (UX/UI).", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Diseño y Experiencia de Usuario (UX/UI)."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE206", "semestre": 2, "sem": 2, "bloque": "B2 (S9-S16)", "nombre": "Costos y Presupuestos", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Costos y Presupuestos desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 2.3: Aplica herramientas financieras para la elaboración y control de presupuestos de proyectos de marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Costos y Presupuestos en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Costos y Presupuestos para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Costos y Presupuestos."], "contenidos": "Estructura de costos, punto de equilibrio, presupuestación de proyectos y pauta digital, CAC, LTV, rentabilidad e indicadores de desempeño financiero (ROI/ROAS).", "actividades_desc": "Taller de cálculo de costos · Simulación de presupuesto de campaña digital · Análisis de retorno de inversión (ROI).", "eval_estrategia": "Caso financiero", "eval_desc": "Informe técnico de costos, flujo de caja y presupuesto de una estrategia de marketing digital.", "eval_herramientas": "Plantillas financieras, hoja de cálculo", "raa": "Aplica herramientas financieras para la elaboración y control de presupuestos de proyectos de marketing digital.", "enfoque_sem": "Integra el análisis de costos y la elaboración de presupuestos en proyectos de comunicación y marketing digital.", "perfil_docente": "Contador Público, Administrador o Economista con posgrado en finanzas y experiencia en gestión presupuestal.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Costos y Presupuestos", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Costos y Presupuestos en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Costos y Presupuestos."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Costos y Presupuestos", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Costos y Presupuestos para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Costos y Presupuestos."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Costos y Presupuestos", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Costos y Presupuestos.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Costos y Presupuestos."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE301", "semestre": 3, "sem": 3, "bloque": "B1 (S1-S8)", "nombre": "Big Data y Analítica de Datos", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "SE205 - Estadística Aplicada al Marketing", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Big Data y Analítica de Datos desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 3.1: Analiza y aplica herramientas de analítica de datos y Big Data para la toma de decisiones en marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Big Data y Analítica de Datos en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Big Data y Analítica de Datos para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Big Data y Analítica de Datos."], "contenidos": "Fundamentos de Big Data (5V), arquitectura de datos, minería de datos, limpieza, visualización en dashboards, métricas de rendimiento y herramientas de analítica digital.", "actividades_desc": "Taller de visualización con Looker Studio (Google Data Studio) y Power BI · Ejercicio de interpretación de métricas · Análisis de tendencias de datos.", "eval_estrategia": "Análisis de datos", "eval_desc": "Dashboard interactivo e informe de interpretación de grandes volúmenes de datos aplicados al marketing.", "eval_herramientas": "Looker Studio, Power BI, rúbrica", "raa": "Analiza y aplica herramientas de analítica de datos y Big Data para la toma de decisiones en marketing digital.", "enfoque_sem": "Introduce el análisis de datos masivos como herramienta para comprender comportamientos, audiencias y resultados en entornos digitales.", "perfil_docente": "Ingeniero de Sistemas, Estadístico o Científico de Datos con Maestría en Big Data o Analítica.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Big Data y Analítica de Datos", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Big Data y Analítica de Datos en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Big Data y Analítica de Datos."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Big Data y Analítica de Datos", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Big Data y Analítica de Datos para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Big Data y Analítica de Datos."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Big Data y Analítica de Datos", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Big Data y Analítica de Datos.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Big Data y Analítica de Datos."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE302", "semestre": 3, "sem": 3, "bloque": "B2 (S9-S16)", "nombre": "Emprendimiento", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Emprendimiento desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 3.2: Formula propuestas de emprendimiento aplicando modelos de negocio innovadores y sostenibles.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Emprendimiento en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Emprendimiento para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Emprendimiento."], "contenidos": "Ecosistema de emprendimiento digital, identificación de oportunidades, metodologías Lean Startup, diseño de modelos de negocio Canvas, innovación y sostenibilidad.", "actividades_desc": "Taller de modelado Lean Canvas · Análisis de casos de startups digitales · Presentación y validación de idea de negocio.", "eval_estrategia": "Plan de negocio", "eval_desc": "Diseño y sustentación (Pitch) de un plan básico de emprendimiento digital sostenible.", "eval_herramientas": "Lienzo Canvas, rúbrica, pitch", "raa": "Formula propuestas de emprendimiento aplicando modelos de negocio innovadores y sostenibles.", "enfoque_sem": "Promueve la identificación de oportunidades de negocio y la formulación de iniciativas emprendedoras en contextos digitales.", "perfil_docente": "Administrador, Economista o Ingeniero con posgrado en innovación, emprendimiento o gerencia de proyectos.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Emprendimiento", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Emprendimiento en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Emprendimiento."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Emprendimiento", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Emprendimiento para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Emprendimiento."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Emprendimiento", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Emprendimiento.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Emprendimiento."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE303", "semestre": 3, "sem": 3, "bloque": "B1 (S1-S8)", "nombre": "Marketing de Contenidos", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE201 - Gestión de Marca Digital (Branding)", "moodle": "En cronograma de producción ADDIE (Fase 2)", "descripcion": "La asignatura Marketing de Contenidos desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 3.3: Diseña estrategias de contenido orientadas a la atracción, conversión y fidelización de audiencias digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Marketing de Contenidos en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Marketing de Contenidos para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Marketing de Contenidos."], "contenidos": "Estrategias de contenido digital, metodología Inbound Marketing (atraer, convertir, cerrar, deleitar), Buyer Persona, redacción SEO on-page y planificación editorial.", "actividades_desc": "Creación de Buyer Personas y matriz de contenidos · Taller de redacción SEO y búsqueda de keywords · Simulación de calendario editorial.", "eval_estrategia": "Estrategia de contenidos", "eval_desc": "Plan integral de marketing de contenidos, arquitectura SEO y calendarización editorial.", "eval_herramientas": "Rúbrica, matriz editorial, herramientas SEO", "raa": "Diseña estrategias de contenido orientadas a la atracción, conversión y fidelización de audiencias digitales.", "enfoque_sem": "Desarrolla la planificación y gestión estratégica de contenidos digitales alineados a objetivos de marca y posicionamiento orgánico.", "perfil_docente": "Profesional en Marketing o Comunicación con posgrado y experiencia en Inbound Marketing, CMS y SEO.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Marketing de Contenidos", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Marketing de Contenidos en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Marketing de Contenidos."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Marketing de Contenidos", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Marketing de Contenidos para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Marketing de Contenidos."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Marketing de Contenidos", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Marketing de Contenidos.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Marketing de Contenidos."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE304", "semestre": 3, "sem": 3, "bloque": "B1 (S1-S8)", "nombre": "Gestión de Redes Sociales (Social Media Management)", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE102 - Fundamentos de Marketing Digital", "moodle": "En cronograma de producción ADDIE (Fase 2)", "descripcion": "La asignatura Gestión de Redes Sociales (Social Media Management) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 3.1: Administra estrategias de comunicación, posicionamiento y gestión de comunidades en redes sociales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de Redes Sociales (Social Media Management) en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de Redes Sociales (Social Media Management) para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de Redes Sociales (Social Media Management)."], "contenidos": "Arquitectura de plataformas sociales (Meta, TikTok, LinkedIn, X, YouTube), administración de comunidades, Social Media Plan, programación, social listening y métricas de engagement.", "actividades_desc": "Creación de Social Media Plan · Monitoreo de redes con herramientas analíticas · Auditoría y análisis de engagement.", "eval_estrategia": "Gestión de cuentas", "eval_desc": "Proyecto aplicado de gestión estratégica de redes sociales y reporte de KPIs de comunidad.", "eval_herramientas": "Meta Business Suite, KPI checklist, rúbrica", "raa": "Administra estrategias de comunicación, posicionamiento y gestión de comunidades en redes sociales.", "enfoque_sem": "Fortalece la administración profesional de comunidades digitales, la interacción con audiencias y el manejo de plataformas sociales.", "perfil_docente": "Profesional en Marketing Digital o Comunicación con posgrado y dominio de Meta Business Suite, Hootsuite y analítica social.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de Redes Sociales (Social Media Management)", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de Redes Sociales (Social Media Management) en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión de Redes Sociales (Social Media Management)."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de Redes Sociales (Social Media Management)", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de Redes Sociales (Social Media Management) para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión de Redes Sociales (Social Media Management)."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de Redes Sociales (Social Media Management)", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de Redes Sociales (Social Media Management).", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión de Redes Sociales (Social Media Management)."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE305", "semestre": 3, "sem": 3, "bloque": "B2 (S9-S16)", "nombre": "Producción de Contenidos para Plataformas Multimedia", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE202 - Diseño UX/UI para Entornos Digitales", "moodle": "En cronograma de producción ADDIE (Fase 2)", "descripcion": "La asignatura Producción de Contenidos para Plataformas Multimedia desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 3.2: Produce materiales multimedia creativos, técnicos y coherentes con los objetivos de comunicación digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Producción de Contenidos para Plataformas Multimedia en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Producción de Contenidos para Plataformas Multimedia para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Producción de Contenidos para Plataformas Multimedia."], "contenidos": "Lenguaje audiovisual digital, preproducción, grabación, edición de video y audio (podcast/reels), diseño gráfico para redes y formatos multimedia multiplataforma.", "actividades_desc": "Taller de producción sonora y audiovisual · Edición de videos promocionales con Adobe Creative Cloud · Diseño de piezas multimedia interactivas.", "eval_estrategia": "Producto digital", "eval_desc": "Portafolio de contenidos multimedia (video, audio/podcast y gráfica digital) listos para despliegue.", "eval_herramientas": "Adobe Creative Cloud, rúbrica, portafolio", "raa": "Produce materiales multimedia creativos, técnicos y coherentes con los objetivos de comunicación digital.", "enfoque_sem": "Desarrolla habilidades técnicas y creativas para la creación de contenidos audiovisuales, sonoros y gráficos.", "perfil_docente": "Diseñador Multimedia, Realizador Audiovisual o Comunicador con posgrado y dominio de la suite Adobe Creative Cloud.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Producción de Contenidos para Plataformas Multimedia", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Producción de Contenidos para Plataformas Multimedia en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Producción de Contenidos para Plataformas Multimedia."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Producción de Contenidos para Plataformas Multimedia", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Producción de Contenidos para Plataformas Multimedia para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Producción de Contenidos para Plataformas Multimedia."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Producción de Contenidos para Plataformas Multimedia", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Producción de Contenidos para Plataformas Multimedia.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Producción de Contenidos para Plataformas Multimedia."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE306", "semestre": 3, "sem": 3, "bloque": "B2 (S9-S16)", "nombre": "Storytelling, Copywriting y Narrativas Transmedia", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE206 - Inglés I", "moodle": "En cronograma de producción ADDIE (Fase 2)", "descripcion": "La asignatura Storytelling, Copywriting y Narrativas Transmedia desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 3.3: Construye narrativas transmedia y textos persuasivos que fortalezcan la conexión emocional y la conversión con las audiencias digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Storytelling, Copywriting y Narrativas Transmedia en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Storytelling, Copywriting y Narrativas Transmedia para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Storytelling, Copywriting y Narrativas Transmedia."], "contenidos": "Técnicas de redacción persuasiva (Copywriting: AIDA, PAS), UX Writing, estructuras de Storytelling corporativo, universo narrativo transmedia y tono de voz de marca.", "actividades_desc": "Taller de copywriting para landing pages, anuncios y redes · Creación de biblia de historia transmedia · Análisis de campañas narrativas.", "eval_estrategia": "Narrativa digital", "eval_desc": "Diseño y presentación de una estrategia de narrativa transmedia y piezas de copywriting aplicadas a una marca.", "eval_herramientas": "Rúbrica, dossier creativo transmedia", "raa": "Construye narrativas transmedia y textos persuasivos que fortalezcan la conexión emocional y la conversión con las audiencias digitales.", "enfoque_sem": "Integra la narrativa, la escritura persuasiva y la construcción de mensajes transmedia para múltiples plataformas.", "perfil_docente": "Comunicador Social, Publicista o Literato con posgrado en comunicación digital, narrativa o publicidad.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Storytelling, Copywriting y Narrativas Transmedia", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Storytelling, Copywriting y Narrativas Transmedia en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Storytelling, Copywriting y Narrativas Transmedia."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Storytelling, Copywriting y Narrativas Transmedia", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Storytelling, Copywriting y Narrativas Transmedia para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Storytelling, Copywriting y Narrativas Transmedia."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Storytelling, Copywriting y Narrativas Transmedia", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Storytelling, Copywriting y Narrativas Transmedia.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Storytelling, Copywriting y Narrativas Transmedia."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE401", "semestre": 4, "sem": 4, "bloque": "B1 (S1-S8)", "nombre": "Inteligencia Artificial", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "SE301 - Big Data y Analítica Digital", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Inteligencia Artificial desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 4.1: Aplica herramientas y modelos de inteligencia artificial para optimizar estrategias y procesos de marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Inteligencia Artificial en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Inteligencia Artificial para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inteligencia Artificial."], "contenidos": "Fundamentos de Inteligencia Artificial, aprendizaje automático (Machine Learning), modelos generativos (LLMs), ingeniería de prompts, hiperpersonalización y automatización en marketing.", "actividades_desc": "Taller de herramientas de IA para investigación y segmentación · Análisis de casos de IA aplicada al consumidor · Creación de prototipo de automatización inteligente.", "eval_estrategia": "Proyecto aplicado", "eval_desc": "Proyecto de integración de modelos de Inteligencia Artificial en una estrategia de marketing digital.", "eval_herramientas": "Herramientas IA, rúbrica de proyecto", "raa": "Aplica herramientas y modelos de inteligencia artificial para optimizar estrategias y procesos de marketing digital.", "enfoque_sem": "Introduce el uso estratégico y crítico de herramientas de IA aplicadas al marketing para optimizar procesos y decisiones.", "perfil_docente": "Ingeniero de Sistemas o Científico de Datos con Maestría en Inteligencia Artificial, Ciencia de Datos o Software.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inteligencia Artificial", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Inteligencia Artificial en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inteligencia Artificial."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inteligencia Artificial", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Inteligencia Artificial para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inteligencia Artificial."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inteligencia Artificial", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inteligencia Artificial.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inteligencia Artificial."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE402", "semestre": 4, "sem": 4, "bloque": "B2 (S9-S16)", "nombre": "Inglés I", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "Ninguno", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Inglés I desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 8: Investigación, Innovación y Prospección en Marketing Digital.", "rap_asociado": "RAP 4.2: Comprende y utiliza vocabulario técnico básico en inglés en contextos académicos y profesionales del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Inglés I en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Inglés I para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inglés I."], "contenidos": "Competencias comunicativas fundamentales (MCER A1–A2), vocabulario técnico de marketing digital y negocios, estructuras gramaticales, comprensión lectora y auditiva.", "actividades_desc": "Lectura de artículos globales sobre digital marketing · Ejercicios interactivos de vocabulario técnico Martech · Conversaciones guiadas en inglés.", "eval_estrategia": "Evaluación comunicativa", "eval_desc": "Prueba integral de comprensión lectora, producción escrita y expresión oral en inglés.", "eval_herramientas": "Plataforma de idiomas, prueba oral y escrita", "raa": "Comprende y utiliza vocabulario técnico básico en inglés en contextos académicos y profesionales del marketing digital.", "enfoque_sem": "Fortalece la comprensión y comunicación básica en inglés en contextos académicos y del ecosistema digital.", "perfil_docente": "Licenciado en Lenguas Extranjeras / Inglés con posgrado y certificación internacional.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés I", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Inglés I en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés I."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés I", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Inglés I para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés I."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés I", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inglés I.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés I."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE403", "semestre": 4, "sem": 4, "bloque": "B1 (S1-S8)", "nombre": "Analítica Web y Métricas de Desempeño", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "SE303 - Marketing de Contenidos", "moodle": "En cronograma de producción ADDIE (Fase 3)", "descripcion": "La asignatura Analítica Web y Métricas de Desempeño desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 4.3: Interpreta y aplica métricas de analítica web para la toma de decisiones estratégicas en marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Analítica Web y Métricas de Desempeño en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Analítica Web y Métricas de Desempeño para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Analítica Web y Métricas de Desempeño."], "contenidos": "Ecosistema de medición web, etiquetado con Google Tag Manager, configuración y análisis en Google Analytics 4 (GA4), embudos de conversión, atribución y KPIs de desempeño.", "actividades_desc": "Taller de configuración y análisis de eventos en Google Analytics 4 · Estudio de caso de medición de tráfico y conversión · Diseño de dashboard ejecutivo de resultados.", "eval_estrategia": "Informe analítico", "eval_desc": "Auditoría de analítica web e informe ejecutivo de atribución y optimización de métricas digitales.", "eval_herramientas": "Google Analytics 4, Tag Manager, Looker Studio, rúbrica", "raa": "Interpreta y aplica métricas de analítica web para la toma de decisiones estratégicas en marketing digital.", "enfoque_sem": "Desarrolla el análisis técnico de métricas digitales para evaluar resultados, tráfico, conversión y desempeño de activos web.", "perfil_docente": "Profesional en Marketing Digital o Ingeniería con posgrado y certificación en Google Analytics 4 y Analítica Digital.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Analítica Web y Métricas de Desempeño", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Analítica Web y Métricas de Desempeño en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Analítica Web y Métricas de Desempeño."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Analítica Web y Métricas de Desempeño", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Analítica Web y Métricas de Desempeño para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Analítica Web y Métricas de Desempeño."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Analítica Web y Métricas de Desempeño", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Analítica Web y Métricas de Desempeño.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Analítica Web y Métricas de Desempeño."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE404", "semestre": 4, "sem": 4, "bloque": "B2 (S9-S16)", "nombre": "Automatización del Marketing y CRM", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "SE304 - Gestión de Redes Sociales", "moodle": "En cronograma de producción ADDIE (Fase 3)", "descripcion": "La asignatura Automatización del Marketing y CRM desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 3: Ecosistemas Tecnológicos, MarTech, CRM y Automatización de Procesos.", "rap_asociado": "RAP 4.1: Diseña e implementa flujos de automatización y gestión de relaciones con clientes (CRM) para optimizar la conversión y retención.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Automatización del Marketing y CRM en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Automatización del Marketing y CRM para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Automatización del Marketing y CRM."], "contenidos": "Arquitectura CRM (Customer Relationship Management), Lead Scoring, Lead Nurturing, diseño de flujos automatizados (workflows), email marketing automatizado, chatbots e integración omnicanal.", "actividades_desc": "Taller de configuración de pipelines y contactos en HubSpot/CRM · Diseño de flujos de nutrición y automatización · Estudio de caso de retención y LTV.", "eval_estrategia": "Implementación práctica", "eval_desc": "Diseño e implementación funcional de flujos automatizados de captación, nutrición y fidelización en plataforma CRM.", "eval_herramientas": "Plataforma CRM (HubSpot / Brevo), rúbrica", "raa": "Diseña e implementa flujos de automatización y gestión de relaciones con clientes (CRM) para optimizar la conversión y retención.", "enfoque_sem": "Permite implementar procesos automatizados para la gestión inteligente de leads, clientes y campañas digitales.", "perfil_docente": "Profesional en Marketing o Ingeniería con posgrado y certificación en HubSpot CRM / Marketing Automation.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Automatización del Marketing y CRM", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Automatización del Marketing y CRM en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Automatización del Marketing y CRM."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Automatización del Marketing y CRM", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Automatización del Marketing y CRM para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Automatización del Marketing y CRM."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Automatización del Marketing y CRM", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Automatización del Marketing y CRM.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Automatización del Marketing y CRM."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE405", "semestre": 4, "sem": 4, "bloque": "B1 (S1-S8)", "nombre": "Estrategias de Marketing Digital", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE305 - Producción de Contenidos Multimedia", "moodle": "En cronograma de producción ADDIE (Fase 3)", "descripcion": "La asignatura Estrategias de Marketing Digital desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 4.2: Formula estrategias integrales de marketing digital coherentes con los objetivos organizacionales y las tendencias del mercado.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Estrategias de Marketing Digital en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Estrategias de Marketing Digital para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Estrategias de Marketing Digital."], "contenidos": "Planificación estratégica integral de marketing digital (modelo SOSTAC / RACE), diagnóstico digital, definición de objetivos OKR/SMART, mix de canales, asignación presupuestal y control.", "actividades_desc": "Taller de diseño de Plan de Marketing Digital · Análisis crítico de campañas ganadoras (Effie Awards) · Simulación de estrategia omnicanal.", "eval_estrategia": "Plan estratégico", "eval_desc": "Desarrollo y sustentación de un Plan Estratégico Integral de Marketing Digital para una organización real.", "eval_herramientas": "Rúbrica analítica, plantilla SOSTAC/RACE", "raa": "Formula estrategias integrales de marketing digital coherentes con los objetivos organizacionales y las tendencias del mercado.", "enfoque_sem": "Integra los conocimientos de los primeros cuatro semestres para el diseño de planes estratégicos digitales orientados a objetivos.", "perfil_docente": "Profesional en Marketing o Administración con Maestría en Marketing Digital o Dirección de Marketing.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Estrategias de Marketing Digital", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Estrategias de Marketing Digital en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Estrategias de Marketing Digital."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Estrategias de Marketing Digital", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Estrategias de Marketing Digital para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Estrategias de Marketing Digital."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Estrategias de Marketing Digital", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Estrategias de Marketing Digital.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Estrategias de Marketing Digital."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE406", "semestre": 4, "sem": 4, "bloque": "B2 (S9-S16)", "nombre": "Comercio Electrónico (E-commerce)", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE306 - Inglés II", "moodle": "En cronograma de producción ADDIE (Fase 3)", "descripcion": "La asignatura Comercio Electrónico (E-commerce) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 4.3: Diseña e implementa soluciones de comercio electrónico enfocadas en la experiencia del usuario, la conversión y la seguridad digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Comercio Electrónico (E-commerce) en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Comercio Electrónico (E-commerce) para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Comercio Electrónico (E-commerce)."], "contenidos": "Modelos de comercio electrónico (B2C, B2B, D2C, Marketplaces), plataformas (Shopify, WooCommerce, VTEX), pasarelas de pago, logística de última milla, conversión (CRO) y seguridad transaccional.", "actividades_desc": "Taller de arquitectura y configuración de tienda online · Simulación de flujo de checkout y conversión · Auditoría de plataformas e-commerce.", "eval_estrategia": "Proyecto e-commerce", "eval_desc": "Proyecto de diseño y configuración de un ecosistema de comercio electrónico funcional y seguro.", "eval_herramientas": "Plataforma E-commerce (Shopify/WooCommerce), rúbrica", "raa": "Diseña e implementa soluciones de comercio electrónico enfocadas en la experiencia del usuario, la conversión y la seguridad digital.", "enfoque_sem": "Introduce modelos de negocio transaccionales digitales, marketplaces y operación integral de tiendas virtuales.", "perfil_docente": "Administrador, Mercadólogo o Ingeniero con posgrado y experiencia práctica en gestión de E-commerce y Marketplaces.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Comercio Electrónico (E-commerce)", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Comercio Electrónico (E-commerce) en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Comercio Electrónico (E-commerce)."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Comercio Electrónico (E-commerce)", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Comercio Electrónico (E-commerce) para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Comercio Electrónico (E-commerce)."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Comercio Electrónico (E-commerce)", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Comercio Electrónico (E-commerce).", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Comercio Electrónico (E-commerce)."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE501", "semestre": 5, "sem": 5, "bloque": "B1 (S1-S8)", "nombre": "Pensamiento Estratégico y Prospectivo", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE401 - Analítica Web y Métricas de Marketing", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Pensamiento Estratégico y Prospectivo desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 5.1: Desarrolla pensamiento estratégico y visión prospectiva para la toma de decisiones en entornos digitales cambiantes.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Pensamiento Estratégico y Prospectivo en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Pensamiento Estratégico y Prospectivo para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Pensamiento Estratégico y Prospectivo."], "contenidos": "Escuelas de pensamiento estratégico, vigilancia tecnológica, inteligencia competitiva, prospectiva estratégica (escenarios de Michel Godet), análisis MICMAC y toma de decisiones bajo incertidumbre.", "actividades_desc": "Taller de análisis prospectivo del entorno digital · Elaboración de matriz de impactos cruzados y escenarios futuros · Debate sobre tecnologías disruptivas.", "eval_estrategia": "Análisis prospectivo", "eval_desc": "Estudio prospectivo de escenarios futuros del mercado digital para un sector productivo.", "eval_herramientas": "Matriz de escenarios, rúbrica", "raa": "Desarrolla pensamiento estratégico y visión prospectiva para la toma de decisiones en entornos digitales cambiantes.", "enfoque_sem": "Permite analizar tendencias de largo plazo y construir escenarios futuros para anticipar cambios del ecosistema digital.", "perfil_docente": "Profesional en Administración, Economía o Marketing con Maestría o Doctorado en Pensamiento Estratégico o Prospectiva.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Pensamiento Estratégico y Prospectivo", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Pensamiento Estratégico y Prospectivo en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Pensamiento Estratégico y Prospectivo."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Pensamiento Estratégico y Prospectivo", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Pensamiento Estratégico y Prospectivo para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Pensamiento Estratégico y Prospectivo."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Pensamiento Estratégico y Prospectivo", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Pensamiento Estratégico y Prospectivo.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Pensamiento Estratégico y Prospectivo."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE502", "semestre": 5, "sem": 5, "bloque": "B2 (S9-S16)", "nombre": "Inglés II", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "Ninguno (Mínimo 72 créditos aprobados)", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Inglés II desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 8: Investigación, Innovación y Prospección en Marketing Digital.", "rap_asociado": "RAP 5.2: Utiliza el inglés de manera funcional para la comunicación en contextos académicos y empresariales del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Inglés II en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Inglés II para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inglés II."], "contenidos": "Comunicación intermedia (MCER A2–B1.1) en contextos empresariales y de marketing digital, redacción de briefs e informes comerciales, comprensión auditiva y presentaciones ejecutivas.", "actividades_desc": "Simulación de presentaciones de campañas comerciales en inglés · Ejercicios de redacción técnica de marketing · Debate sobre casos globales de innovación.", "eval_estrategia": "Evaluación comunicativa", "eval_desc": "Presentación oral de propuesta de marketing en inglés y prueba escrita de producción técnica.", "eval_herramientas": "Plataforma de idiomas, prueba oral y escrita", "raa": "Utiliza el inglés de manera funcional para la comunicación en contextos académicos y empresariales del marketing digital.", "enfoque_sem": "Desarrolla habilidades comunicativas intermedias en inglés aplicadas a la gestión comercial y digital.", "perfil_docente": "Licenciado en Lenguas Modernas con posgrado y experiencia en inglés de negocios (ESP).", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés II", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Inglés II en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés II."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés II", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Inglés II para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés II."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés II", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inglés II.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés II."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE503", "semestre": 5, "sem": 5, "bloque": "B1 (S1-S8)", "nombre": "Electiva I", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "ELECTIVA", "area_name": "Electiva", "componente": "Electivo de Profundización", "componente_nombre": "Electivo de Profundización", "prerrequisito": "SE403 - SEO: Posicionamiento Orgánico", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Electiva I desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva (Electivo de Profundización), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 5.3: Integra saberes especializados del área electiva seleccionada en la práctica profesional del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Electiva I en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Electiva I para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Electiva I."], "contenidos": "Profundización flexible elegida por el estudiante entre el portafolio oficial de la Tabla 25 (Marketing verde y sostenible, Comunicación digital política, Marketing turístico y de experiencias, Gamificación y UX, Producción audiovisual digital, Comercio internacional electrónico).", "actividades_desc": "Proyecto aplicado al campo electivo seleccionado · Estudio de caso especializado · Exposición temática de tendencias.", "eval_estrategia": "Proyecto temático", "eval_desc": "Desarrollo de proyecto aplicado en la línea de profundización electiva seleccionada por el estudiante.", "eval_herramientas": "Rúbrica de proyecto aplicado", "raa": "Integra saberes especializados del área electiva seleccionada en la práctica profesional del marketing digital.", "enfoque_sem": "Profundiza en un campo específico y emergente del marketing digital según la vocación e intereses del estudiante.", "perfil_docente": "Especialista o Magíster en el área específica de la asignatura electiva ofertada.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva I", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Electiva I en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva I."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva I", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Electiva I para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva I."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva I", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Electiva I.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva I."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE504", "semestre": 5, "sem": 5, "bloque": "B2 (S9-S16)", "nombre": "Neuromarketing y Psicología del Consumidor", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE404 - Publicidad Digital y SEM (Google Ads)", "moodle": "En cronograma de producción ADDIE (Fase 4)", "descripcion": "La asignatura Neuromarketing y Psicología del Consumidor desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 5.1: Aplica principios del neuromarketing y la psicología del consumidor para comprender y anticipar decisiones de compra en entornos digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Neuromarketing y Psicología del Consumidor en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Neuromarketing y Psicología del Consumidor para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Neuromarketing y Psicología del Consumidor."], "contenidos": "Fundamentos neurocientíficos del consumo, sesgos cognitivos (economía conductual), atención, emoción y memoria en interfaces digitales, eye-tracking, mapas de calor y psicología de precios.", "actividades_desc": "Taller de análisis de casos de neuromarketing digital · Simulación de mapas de calor y atención visual · Evaluación de gatillos mentales y campañas emocionales.", "eval_estrategia": "Estudio de caso conductual", "eval_desc": "Informe analítico de comportamiento del consumidor digital y rediseño persuasivo basado en neuromarketing.", "eval_herramientas": "Mapas de calor (Hotjar/Clarify), informe, rúbrica", "raa": "Aplica principios del neuromarketing y la psicología del consumidor para comprender y anticipar decisiones de compra en entornos digitales.", "enfoque_sem": "Analiza el comportamiento del consumidor digital desde enfoques cognitivos, neurocientíficos y emocionales.", "perfil_docente": "Profesional en Psicología del Consumidor o Marketing con Maestría en Neuromarketing o Comportamiento del Consumidor.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Neuromarketing y Psicología del Consumidor", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Neuromarketing y Psicología del Consumidor en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Neuromarketing y Psicología del Consumidor."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Neuromarketing y Psicología del Consumidor", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Neuromarketing y Psicología del Consumidor para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Neuromarketing y Psicología del Consumidor."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Neuromarketing y Psicología del Consumidor", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Neuromarketing y Psicología del Consumidor.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Neuromarketing y Psicología del Consumidor."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE505", "semestre": 5, "sem": 5, "bloque": "B1 (S1-S8)", "nombre": "Gestión de la Reputación y Crisis Digitales", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE303 - Marketing de Contenidos", "moodle": "En cronograma de producción ADDIE (Fase 4)", "descripcion": "La asignatura Gestión de la Reputación y Crisis Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 5.2: Diseña protocolos y estrategias de comunicación para la gestión ética, preventiva y resolutiva de la reputación y las crisis digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de la Reputación y Crisis Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de la Reputación y Crisis Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de la Reputación y Crisis Digitales."], "contenidos": "Activos de reputación online (ORM), monitoreo de conversación y análisis de sentimiento (Social Listening), matrices de riesgo reputacional, manual de crisis digital, vocería y recuperación de confianza.", "actividades_desc": "Simulación en tiempo real de crisis reputacional en redes · Elaboración de protocolo y comité de respuesta · Debate ético sobre reputación de marca.", "eval_estrategia": "Simulación de crisis", "eval_desc": "Diseño de Manual de Gestión de Crisis y Reputación Digital y defensa en ejercicio de simulación.", "eval_herramientas": "Herramientas de Social Listening, rúbrica", "raa": "Diseña protocolos y estrategias de comunicación para la gestión ética, preventiva y resolutiva de la reputación y las crisis digitales.", "enfoque_sem": "Desarrolla la capacidad gerencial para proteger el activo intangible de marca y gestionar crisis en ecosistemas digitales.", "perfil_docente": "Comunicador Social o Mercadólogo con Maestría en Comunicación Estratégica, Relaciones Públicas o Gestión de Crisis.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de la Reputación y Crisis Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de la Reputación y Crisis Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión de la Reputación y Crisis Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de la Reputación y Crisis Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de la Reputación y Crisis Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión de la Reputación y Crisis Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de la Reputación y Crisis Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de la Reputación y Crisis Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión de la Reputación y Crisis Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE506", "semestre": 5, "sem": 5, "bloque": "B2 (S9-S16)", "nombre": "Ciberseguridad y Gestión Ética de Datos", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "SE204 - Contabilidad y Costos", "moodle": "En cronograma de producción ADDIE (Fase 4)", "descripcion": "La asignatura Ciberseguridad y Gestión Ética de Datos desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 5.3: Implementa buenas prácticas de ciberseguridad, cumplimiento normativo y gestión ética de datos en entornos digitales.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Ciberseguridad y Gestión Ética de Datos en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Ciberseguridad y Gestión Ética de Datos para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Ciberseguridad y Gestión Ética de Datos."], "contenidos": "Seguridad de la información en activos de marketing, privacidad desde el diseño (Privacy by Design), cumplimiento de Ley 1581 de 2012 (Habeas Data) y GDPR, políticas de cookies/first-party data y ética algorítmica.", "actividades_desc": "Taller de auditoría de privacidad y ciberseguridad en sitios web y CRM · Análisis de normativas de protección de datos · Simulación de protocolos ante brechas de seguridad.", "eval_estrategia": "Caso ético y técnico", "eval_desc": "Informe técnico y matriz de cumplimiento legal y ético de datos para un ecosistema de marketing digital.", "eval_herramientas": "Foro evaluado, checklist GDPR/Ley 1581, rúbrica", "raa": "Implementa buenas prácticas de ciberseguridad, cumplimiento normativo y gestión ética de datos en entornos digitales.", "enfoque_sem": "Aborda la protección de datos personales, la seguridad de activos digitales y el uso ético de la información del consumidor.", "perfil_docente": "Ingeniero de Sistemas o Abogado experto en Derecho Informático con Maestría en Ciberseguridad o Seguridad de la Información.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Ciberseguridad y Gestión Ética de Datos", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Ciberseguridad y Gestión Ética de Datos en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Ciberseguridad y Gestión Ética de Datos."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Ciberseguridad y Gestión Ética de Datos", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Ciberseguridad y Gestión Ética de Datos para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Ciberseguridad y Gestión Ética de Datos."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Ciberseguridad y Gestión Ética de Datos", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Ciberseguridad y Gestión Ética de Datos.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Ciberseguridad y Gestión Ética de Datos."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE601", "semestre": 6, "sem": 6, "bloque": "B1 (S1-S8)", "nombre": "Gestión de Proyectos Digitales", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "SE501 - Business Intelligence y Dashboards", "moodle": "En cronograma de producción ADDIE (Fase 5)", "descripcion": "La asignatura Gestión de Proyectos Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 6.1: Gestiona proyectos digitales aplicando metodologías ágiles, liderazgo colaborativo y principios de eficiencia operativa.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de Proyectos Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de Proyectos Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de Proyectos Digitales."], "contenidos": "Dirección de proyectos digitales bajo estándares PMI y metodologías ágiles (Scrum, Kanban, Lean Agile), gestión del alcance, cronograma, presupuesto, equipos remotos, riesgos y aseguramiento de calidad.", "actividades_desc": "Simulación de sprints de proyecto digital con tableros Kanban/Jira · Taller de cronogramas, costos y asignación de recursos · Retrospectiva ágil.", "eval_estrategia": "Proyecto colaborativo", "eval_desc": "Planeación y gestión integral de un producto o campaña digital utilizando marcos ágiles Scrum/Kanban.", "eval_herramientas": "Trello/Jira/Asana, cronograma, rúbrica", "raa": "Gestiona proyectos digitales aplicando metodologías ágiles, liderazgo colaborativo y principios de eficiencia operativa.", "enfoque_sem": "Desarrolla habilidades gerenciales para planificar, ejecutar, controlar y evaluar proyectos complejos del ecosistema digital.", "perfil_docente": "Ingeniero, Administrador o Mercadólogo con Maestría en Gerencia de Proyectos o certificación PMP / Scrum Master.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de Proyectos Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de Proyectos Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión de Proyectos Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de Proyectos Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de Proyectos Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión de Proyectos Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de Proyectos Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de Proyectos Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión de Proyectos Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE602", "semestre": 6, "sem": 6, "bloque": "B2 (S9-S16)", "nombre": "Inglés III", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "TRANSVERSAL", "area_name": "Transversal", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE502 - Electiva I", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Inglés III desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Transversal (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 8: Investigación, Innovación y Prospección en Marketing Digital.", "rap_asociado": "RAP 6.2: Se comunica con fluidez y precisión en inglés técnico (Nivel B1 MCER) en contextos profesionales globales del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Inglés III en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Inglés III para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inglés III."], "contenidos": "Competencias comunicativas profesionales consolidadas en nivel B1 MCER, redacción de informes estratégicos de marketing, pitch internacional en inglés, negociación y análisis de mercados globales.", "actividades_desc": "Simulación de reuniones y negociaciones de marketing internacional · Elaboración de reportes ejecutivos en inglés · Exposición de casos globales.", "eval_estrategia": "Evaluación comunicativa B1", "eval_desc": "Sustentación oral y escrita en inglés de una propuesta estratégica digital internacional (Nivel B1 MCER).", "eval_herramientas": "Plataforma de idiomas, prueba oral y escrita B1", "raa": "Se comunica con fluidez y precisión en inglés técnico (Nivel B1 MCER) en contextos profesionales globales del marketing digital.", "enfoque_sem": "Consolida el dominio comunicativo en segunda lengua requerido como competencia de egreso para actuar en mercados globales.", "perfil_docente": "Licenciado en Lenguas Modernas con Maestría y certificación C1/C2 en enseñanza de inglés profesional.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Inglés III", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Inglés III en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Inglés III."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Inglés III", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Inglés III para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Inglés III."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Inglés III", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Inglés III.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Inglés III."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE603", "semestre": 6, "sem": 6, "bloque": "B1 (S1-S8)", "nombre": "Electiva II", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "ELECTIVA", "area_name": "Electiva", "componente": "Electivo de Profundización", "componente_nombre": "Electivo de Profundización", "prerrequisito": "SE503 - SEO & SE504 - SEM", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Electiva II desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva (Electivo de Profundización), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 6.3: Integra conocimientos especializados del área electiva en la resolución innovadora de problemas del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Electiva II en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Electiva II para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Electiva II."], "contenidos": "Segunda asignatura electiva de profundización elegida por el estudiante dentro del portafolio de la Tabla 25 (Gamificación y UX, Producción audiovisual digital, Marketing turístico, Marketing verde, Comunicación política o Comercio internacional electrónico).", "actividades_desc": "Análisis de tendencias en la línea electiva elegida · Taller práctico aplicado · Presentación de prototipo o campaña especializada.", "eval_estrategia": "Proyecto aplicado", "eval_desc": "Proyecto o producto digital aplicado a la resolución de un reto en el área electiva seleccionada.", "eval_herramientas": "Rúbrica de desempeño especializado", "raa": "Integra conocimientos especializados del área electiva en la resolución innovadora de problemas del marketing digital.", "enfoque_sem": "Profundiza en áreas especializadas y emergentes del marketing digital fortaleciendo la flexibilidad curricular.", "perfil_docente": "Profesional con Maestría y experiencia aplicada en el campo específico de la electiva.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva II", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Electiva II en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva II."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva II", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Electiva II para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva II."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva II", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Electiva II.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva II."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE604", "semestre": 6, "sem": 6, "bloque": "B2 (S9-S16)", "nombre": "Creación de Startups y Ecosistemas Digitales", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "SE505 - Inbound Marketing y Automatización", "moodle": "En cronograma de producción ADDIE (Fase 5)", "descripcion": "La asignatura Creación de Startups y Ecosistemas Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 6.1: Formula, valida e impulsa startups e iniciativas emprendedoras basadas en modelos de negocio digitales escalables.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Creación de Startups y Ecosistemas Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Creación de Startups y Ecosistemas Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Creación de Startups y Ecosistemas Digitales."], "contenidos": "Emprendimiento de base tecnológica, diseño y validación de Producto Mínimo Viable (MVP), métricas de startups (Unit Economics, CAC, LTV, Churn), ecosistemas de incubación/aceleración, levantamiento de capital (Venture Capital) y escalamiento.", "actividades_desc": "Taller de prototipado y validación de MVP digital · Construcción de Pitch Deck para inversionistas · Análisis de ecosistemas de innovación y startups.", "eval_estrategia": "Pitch empresarial", "eval_desc": "Plan de negocio digital, validación de MVP y sustentación de Pitch Deck ante jurado.", "eval_herramientas": "Pitch Deck, modelo financiero startup, rúbrica", "raa": "Formula, valida e impulsa startups e iniciativas emprendedoras basadas en modelos de negocio digitales escalables.", "enfoque_sem": "Fomenta la creación y escalamiento de emprendimientos digitales innovadores articulados con ecosistemas de innovación.", "perfil_docente": "Administrador, Ingeniero o Emprendedor con Maestría en Innovación, Negocios Digitales o MBA.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Creación de Startups y Ecosistemas Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Creación de Startups y Ecosistemas Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Creación de Startups y Ecosistemas Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Creación de Startups y Ecosistemas Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Creación de Startups y Ecosistemas Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Creación de Startups y Ecosistemas Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Creación de Startups y Ecosistemas Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Creación de Startups y Ecosistemas Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Creación de Startups y Ecosistemas Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE605", "semestre": 6, "sem": 6, "bloque": "B1 (S1-S8)", "nombre": "Ciencia de Datos Aplicada al Marketing", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Analítica, Datos e Inteligencia Artificial", "componente_nombre": "Analítica, Datos e Inteligencia Artificial", "prerrequisito": "SE401 - Analítica Web y Métricas", "moodle": "En cronograma de producción ADDIE (Fase 5)", "descripcion": "La asignatura Ciencia de Datos Aplicada al Marketing desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Analítica, Datos e Inteligencia Artificial), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 6.2: Aplica técnicas de ciencia de datos y análisis predictivo para la segmentación avanzada y optimización de estrategias de marketing.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Ciencia de Datos Aplicada al Marketing en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Ciencia de Datos Aplicada al Marketing para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Ciencia de Datos Aplicada al Marketing."], "contenidos": "Modelado predictivo en marketing, segmentación avanzada por clustering (RFM), predicción de abandono (Churn Prediction), sistemas de recomendación, análisis de sentimiento con NLP y visualización avanzada con Python / Power BI.", "actividades_desc": "Taller de modelos predictivos y segmentación RFM · Uso de herramientas de ciencia de datos aplicadas a bases de clientes · Interpretación estratégica de dashboards predictivos.", "eval_estrategia": "Análisis predictivo aplicado", "eval_desc": "Informe y dashboard de modelado predictivo aplicado al comportamiento y retención del consumidor digital.", "eval_herramientas": "Python / Power BI / Looker Studio, rúbrica", "raa": "Aplica técnicas de ciencia de datos y análisis predictivo para la segmentación avanzada y optimización de estrategias de marketing.", "enfoque_sem": "Integra la ciencia de datos y el modelado predictivo en la toma de decisiones estratégicas de marketing.", "perfil_docente": "Ingeniero, Estadístico o Científico de Datos con Maestría en Ciencia de Datos, Big Data o Analítica de Negocios.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Ciencia de Datos Aplicada al Marketing", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Ciencia de Datos Aplicada al Marketing en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Ciencia de Datos Aplicada al Marketing."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Ciencia de Datos Aplicada al Marketing", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Ciencia de Datos Aplicada al Marketing para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Ciencia de Datos Aplicada al Marketing."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Ciencia de Datos Aplicada al Marketing", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Ciencia de Datos Aplicada al Marketing.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Ciencia de Datos Aplicada al Marketing."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE606", "semestre": 6, "sem": 6, "bloque": "B2 (S9-S16)", "nombre": "Gestión Financiera y Comercial para Negocios Digitales", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE506 - Presupuesto y Finanzas Digitales", "moodle": "En cronograma de producción ADDIE (Fase 5)", "descripcion": "La asignatura Gestión Financiera y Comercial para Negocios Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 6.3: Evalúa la rentabilidad, viabilidad y sostenibilidad comercial de proyectos y negocios digitales mediante análisis financiero.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión Financiera y Comercial para Negocios Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión Financiera y Comercial para Negocios Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión Financiera y Comercial para Negocios Digitales."], "contenidos": "Finanzas aplicadas a negocios digitales, valoración de activos digitales, análisis de rentabilidad, estrategias de Pricing dinámico y suscripción, pronóstico de ventas, evaluación financiera (VPN, TIR) y dirección comercial digital.", "actividades_desc": "Taller de proyección de estados financieros de un negocio digital · Simulación de estrategias de pricing y decisiones comerciales · Evaluación de viabilidad financiera.", "eval_estrategia": "Caso financiero", "eval_desc": "Modelo financiero completo e informe de viabilidad y rentabilidad de un negocio o proyecto digital.", "eval_herramientas": "Simulador financiero, plantillas Excel, rúbrica", "raa": "Evalúa la rentabilidad, viabilidad y sostenibilidad comercial de proyectos y negocios digitales mediante análisis financiero.", "enfoque_sem": "Evalúa la sostenibilidad financiera y la eficiencia comercial de modelos de negocio y estrategias digitales.", "perfil_docente": "Administrador, Economista o Contador con Maestría en Finanzas o Dirección Comercial.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión Financiera y Comercial para Negocios Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión Financiera y Comercial para Negocios Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión Financiera y Comercial para Negocios Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión Financiera y Comercial para Negocios Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión Financiera y Comercial para Negocios Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión Financiera y Comercial para Negocios Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión Financiera y Comercial para Negocios Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión Financiera y Comercial para Negocios Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión Financiera y Comercial para Negocios Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE701", "semestre": 7, "sem": 7, "bloque": "B1 (S1-S8)", "nombre": "Investigación e Innovación I", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "Mínimo 108 créditos aprobados", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Investigación e Innovación I desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 5: E-commerce, Estrategia Comercial Omnicanal y Modelos de Negocio Digitales.", "rap_asociado": "RAP 7.1: Formula proyectos de investigación o innovación con rigor metodológico orientados a resolver problemáticas del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Investigación e Innovación I en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Investigación e Innovación I para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Investigación e Innovación I."], "contenidos": "Epistemología y metodología de la investigación aplicada al marketing digital, identificación del problema, estado del arte, diseño metodológico cuantitativo, cualitativo y mixto, e instrumentos de recolección de datos digitales.", "actividades_desc": "Revisión sistemática de literatura en bases de datos (e-Libro, SciELO, Dialnet) · Taller de formulación del problema y metodología · Diseño del anteproyecto.", "eval_estrategia": "Anteproyecto de investigación", "eval_desc": "Formulación y sustentación del anteproyecto de investigación o innovación aplicada al marketing digital.", "eval_herramientas": "Rúbrica investigativa, bases de datos, normas APA", "raa": "Formula proyectos de investigación o innovación con rigor metodológico orientados a resolver problemáticas del marketing digital.", "enfoque_sem": "Articula las 3 líneas de investigación del programa (Tabla 54) con la formulación de proyectos aplicados al entorno real.", "perfil_docente": "Profesional con Maestría o Doctorado e investigador categorizado o con producción científica en el área.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación e Innovación I", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Investigación e Innovación I en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Investigación e Innovación I."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación e Innovación I", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Investigación e Innovación I para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Investigación e Innovación I."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Investigación e Innovación I", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Investigación e Innovación I.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Investigación e Innovación I."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE702", "semestre": 7, "sem": 7, "bloque": "B1 (S1-S8)", "nombre": "Electiva III", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "ELECTIVA", "area_name": "Electiva", "componente": "Electivo de Profundización", "componente_nombre": "Electivo de Profundización", "prerrequisito": "SE602 - Electiva II", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Electiva III desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Electiva (Electivo de Profundización), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 7.2: Integra enfoques emergentes y especializados en el campo del marketing digital desde su área de interés profesional.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Electiva III en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Electiva III para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Electiva III."], "contenidos": "Tercera asignatura electiva de profundización seleccionada por el estudiante dentro del portafolio oficial de la Tabla 25, consolidando su ruta de especialización profesional.", "actividades_desc": "Taller de aplicación práctica avanzada · Debate y foro especializado · Exposición de caso o consultoría aplicada.", "eval_estrategia": "Proyecto temático avanzado", "eval_desc": "Proyecto o caso de consultoría aplicada en la tercera línea electiva elegida por el estudiante.", "eval_herramientas": "Rúbrica de evaluación aplicada", "raa": "Integra enfoques emergentes y especializados en el campo del marketing digital desde su área de interés profesional.", "enfoque_sem": "Culmina el componente flexible del plan de estudios (9 créditos electivos) permitiendo alta especialización.", "perfil_docente": "Profesional con Maestría y experiencia directiva o consultora en el campo electivo.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Electiva III", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Electiva III en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Electiva III."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Electiva III", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Electiva III para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Electiva III."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Electiva III", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Electiva III.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Electiva III."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE703", "semestre": 7, "sem": 7, "bloque": "B1 (S1-S8)", "nombre": "Campañas Digitales Integradas", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE603 - E-commerce y Social Commerce", "moodle": "En cronograma de producción ADDIE (Fase 6)", "descripcion": "La asignatura Campañas Digitales Integradas desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 7.3: Diseña, orquesta y evalúa campañas integradas en entornos digitales aplicando estrategias multicanal coherentes.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Campañas Digitales Integradas en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Campañas Digitales Integradas para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Campañas Digitales Integradas."], "contenidos": "Comunicación Integrada de Marketing (IMC) en entornos digitales, orquestación de medios pagados (Paid Media: Google Ads, Meta Ads, TikTok Ads, Programática), medios propios (Owned) y medios ganados (Earned/PR), presupuesto y atribución.", "actividades_desc": "Taller de arquitectura y pauta de campaña multicanal · Simulación de ejecución y optimización de medios · Análisis de atribución y resultados.", "eval_estrategia": "Campaña integral", "eval_desc": "Diseño, planificación de medios, creatividad y simulación presupuestal de una Campaña Digital Integrada 360°.", "eval_herramientas": "Simuladores de pauta (Google/Meta Ads), rúbrica", "raa": "Diseña, orquesta y evalúa campañas integradas en entornos digitales aplicando estrategias multicanal coherentes.", "enfoque_sem": "Integra estrategia, creatividad, medios publicitarios, presupuesto y métricas en campañas multicanal de alto impacto.", "perfil_docente": "Profesional en Marketing o Publicidad con Maestría y certificación en Google Ads / Meta Blueprint.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Campañas Digitales Integradas", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Campañas Digitales Integradas en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Campañas Digitales Integradas."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Campañas Digitales Integradas", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Campañas Digitales Integradas para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Campañas Digitales Integradas."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Campañas Digitales Integradas", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Campañas Digitales Integradas.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Campañas Digitales Integradas."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE704", "semestre": 7, "sem": 7, "bloque": "B2 (S9-S16)", "nombre": "Planeación Estratégica y Modelos de Negocio Digitales", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "SE604 - CRM y Marketing Automation", "moodle": "En cronograma de producción ADDIE (Fase 6)", "descripcion": "La asignatura Planeación Estratégica y Modelos de Negocio Digitales desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 4: Analítica de Datos, Big Data, Medición de Rendimiento y ROI de Marketing.", "rap_asociado": "RAP 7.1: Desarrolla planes estratégicos y modelos de negocio digitales sostenibles basados en análisis competitivo y prospectivo.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Planeación Estratégica y Modelos de Negocio Digitales en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Planeación Estratégica y Modelos de Negocio Digitales para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Planeación Estratégica y Modelos de Negocio Digitales."], "contenidos": "Direccionamiento estratégico en la economía digital, modelos de negocio de plataformas, suscripción, freemium, marketplaces y SaaS, transformación digital corporativa, gobernanza y Balanced Scorecard digital.", "actividades_desc": "Taller de planeación estratégica y rediseño de modelo de negocio · Análisis de casos de transformación digital · Elaboración de plan estratégico digital.", "eval_estrategia": "Plan empresarial", "eval_desc": "Diseño de un Plan Estratégico y Modelo de Negocio Digital sostenible para una organización.", "eval_herramientas": "Business Model Canvas, Balanced Scorecard, rúbrica", "raa": "Desarrolla planes estratégicos y modelos de negocio digitales sostenibles basados en análisis competitivo y prospectivo.", "enfoque_sem": "Articula la estrategia corporativa con la innovación en modelos de negocio nativos digitales y en transformación.", "perfil_docente": "Administrador o Economista con Maestría o Doctorado en Dirección Estratégica o Negocios Digitales.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Planeación Estratégica y Modelos de Negocio Digitales", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Planeación Estratégica y Modelos de Negocio Digitales en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Planeación Estratégica y Modelos de Negocio Digitales."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Planeación Estratégica y Modelos de Negocio Digitales", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Planeación Estratégica y Modelos de Negocio Digitales para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Planeación Estratégica y Modelos de Negocio Digitales."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Planeación Estratégica y Modelos de Negocio Digitales", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Planeación Estratégica y Modelos de Negocio Digitales.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Planeación Estratégica y Modelos de Negocio Digitales."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE705", "semestre": 7, "sem": 7, "bloque": "B2 (S9-S16)", "nombre": "Producción y Curaduría de Contenidos con IA", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "SE305 - Producción de Contenidos Multimedia", "moodle": "En cronograma de producción ADDIE (Fase 6)", "descripcion": "La asignatura Producción y Curaduría de Contenidos con IA desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 7.2: Produce, personaliza y gestiona contenidos digitales utilizando herramientas de inteligencia artificial de manera ética, crítica e innovadora.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Producción y Curaduría de Contenidos con IA en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Producción y Curaduría de Contenidos con IA para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Producción y Curaduría de Contenidos con IA."], "contenidos": "Ecosistema de IA generativa aplicada a contenidos (texto, imagen, video, audio y avatares), flujos de curaduría asistida por IA, personalización a escala, verificación editorial, derechos de autor y ética del contenido sintético.", "actividades_desc": "Taller práctico de generación y curaduría multimodal con IA · Análisis crítico de casos de IA generativa en branding · Creación de flujo automatizado de contenidos.", "eval_estrategia": "Producto digital con IA", "eval_desc": "Proyecto integral de producción, curaduría ética y despliegue de contenidos multimodales asistidos por IA.", "eval_herramientas": "Suite de herramientas de IA generativa, rúbrica", "raa": "Produce, personaliza y gestiona contenidos digitales utilizando herramientas de inteligencia artificial de manera ética, crítica e innovadora.", "enfoque_sem": "Integra la inteligencia artificial generativa en la creación avanzada y curaduría estratégica de contenidos digitales.", "perfil_docente": "Profesional en Marketing, Comunicación o Sistemas con Maestría y experiencia en IA generativa y producción digital.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Producción y Curaduría de Contenidos con IA", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Producción y Curaduría de Contenidos con IA en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Producción y Curaduría de Contenidos con IA."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Producción y Curaduría de Contenidos con IA", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Producción y Curaduría de Contenidos con IA para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Producción y Curaduría de Contenidos con IA."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Producción y Curaduría de Contenidos con IA", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Producción y Curaduría de Contenidos con IA.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Producción y Curaduría de Contenidos con IA."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE706", "semestre": 7, "sem": 7, "bloque": "B2 (S9-S16)", "nombre": "Customer Experience (CX) y Omnicanalidad", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE603 - E-commerce", "moodle": "En cronograma de producción ADDIE (Fase 6)", "descripcion": "La asignatura Customer Experience (CX) y Omnicanalidad desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 7.3: Diseña y gestiona estrategias de experiencia del cliente (CX) y omnicanalidad centradas en la satisfacción, retención y fidelización.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Customer Experience (CX) y Omnicanalidad en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Customer Experience (CX) y Omnicanalidad para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Customer Experience (CX) y Omnicanalidad."], "contenidos": "Economía de la experiencia, arquitectura de Customer Experience (CX), mapeo de Customer Journey y Service Blueprint, integración omnicanal (físico + digital), métricas de experiencia (NPS, CSAT, CES) y programas de fidelización.", "actividades_desc": "Taller de diseño de Customer Journey Map y Service Blueprint · Simulación de estrategia omnicanal phygital · Auditoría de satisfacción y fricciones del cliente.", "eval_estrategia": "Diagnóstico y diseño CX", "eval_desc": "Mapa de experiencia omnicanal (Customer Journey + Service Blueprint) y estrategia de fidelización basada en NPS/CSAT.", "eval_herramientas": "Miro / Figma, Journey Map, rúbrica", "raa": "Diseña y gestiona estrategias de experiencia del cliente (CX) y omnicanalidad centradas en la satisfacción, retención y fidelización.", "enfoque_sem": "Diseña experiencias de cliente sin fricciones integrando múltiples puntos de contacto físicos y digitales.", "perfil_docente": "Profesional en Marketing o Administración con Maestría y experiencia en Customer Experience (CX) y Omnicanalidad.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Customer Experience (CX) y Omnicanalidad", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Customer Experience (CX) y Omnicanalidad en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Customer Experience (CX) y Omnicanalidad."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Customer Experience (CX) y Omnicanalidad", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Customer Experience (CX) y Omnicanalidad para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Customer Experience (CX) y Omnicanalidad."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Customer Experience (CX) y Omnicanalidad", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Customer Experience (CX) y Omnicanalidad.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Customer Experience (CX) y Omnicanalidad."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE801", "semestre": 8, "sem": 8, "bloque": "B1 (S1-S8)", "nombre": "Investigación e Innovación II", "tipo": "T", "tipo_desc": "Teórica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Investigación, Innovación y Emprendimiento", "componente_nombre": "Investigación, Innovación y Emprendimiento", "prerrequisito": "SE701 - Investigación e Innovación I", "moodle": "Virtualizada al 100% (Moodle)", "descripcion": "La asignatura Investigación e Innovación II desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Investigación, Innovación y Emprendimiento), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 5: E-commerce, Estrategia Comercial Omnicanal y Modelos de Negocio Digitales.", "rap_asociado": "RAP 8.1: Ejecuta, sustenta y transfiere proyectos de investigación o innovación que aporten soluciones basadas en evidencia al campo del marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Investigación e Innovación II en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Investigación e Innovación II para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Investigación e Innovación II."], "contenidos": "Trabajo de campo y recolección de datos digitales, procesamiento y análisis de resultados, validación de prototipos o estrategias de innovación, discusión científica, redacción de informe final/artículo y transferencia al sector productivo.", "actividades_desc": "Ejecución y análisis de datos del proyecto · Presentación de avances y validación de hallazgos · Redacción final y sustentación pública.", "eval_estrategia": "Proyecto final y sustentación", "eval_desc": "Informe final de investigación o innovación aplicada y sustentación pública ante jurado evaluador.", "eval_herramientas": "Rúbrica de trabajo de grado, software de análisis", "raa": "Ejecuta, sustenta y transfiere proyectos de investigación o innovación que aporten soluciones basadas en evidencia al campo del marketing digital.", "enfoque_sem": "Culmina la ruta formativa investigativa del programa mediante la solución verificable de una problemática del entorno.", "perfil_docente": "Profesional con Maestría o Doctorado e investigador activo con publicaciones científicas.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Investigación e Innovación II", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Investigación e Innovación II en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Investigación e Innovación II."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Investigación e Innovación II", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Investigación e Innovación II para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Investigación e Innovación II."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Investigación e Innovación II", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Investigación e Innovación II.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Investigación e Innovación II."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE802", "semestre": 8, "sem": 8, "bloque": "B1 (S1-S8)", "nombre": "Performance Marketing y Growth Hacking (Marketing de Resultados)", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE703 - Campañas Digitales Integradas", "moodle": "En cronograma de producción ADDIE (Fase 7)", "descripcion": "La asignatura Performance Marketing y Growth Hacking (Marketing de Resultados) desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 8.2: Aplica metodologías de experimentación, Growth Hacking y marketing de resultados orientadas al crecimiento medible de las organizaciones.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Performance Marketing y Growth Hacking (Marketing de Resultados) en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Performance Marketing y Growth Hacking (Marketing de Resultados) para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Performance Marketing y Growth Hacking (Marketing de Resultados)."], "contenidos": "Estrategias de adquisición y crecimiento acelerado (Growth Hacking · embudo AARRR / Pirate Metrics), experimentación A/B testing, optimización de tasa de conversión (CRO), pauta de alto rendimiento y maximización de ROAS/ROI.", "actividades_desc": "Taller de diseño de experimentos Growth y pruebas A/B · Simulación de optimización de campañas de performance · Análisis avanzado de cohortes y conversión.", "eval_estrategia": "Optimización de campañas", "eval_desc": "Informe estratégico y experimental de Performance Marketing, CRO y Growth Hacking orientado a ROI/ROAS.", "eval_herramientas": "Plataformas Ads, herramientas CRO, rúbrica", "raa": "Aplica metodologías de experimentación, Growth Hacking y marketing de resultados orientadas al crecimiento medible de las organizaciones.", "enfoque_sem": "Optimiza estrategias digitales de alta exigencia orientadas a conversión, adquisición rentable y escalamiento.", "perfil_docente": "Especialista o Magíster en Marketing Digital con trayectoria en Performance Marketing, Growth Hacking y Paid Media.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Performance Marketing y Growth Hacking (Marketing de Resultados)", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Performance Marketing y Growth Hacking (Marketing de Resultados) en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Performance Marketing y Growth Hacking (Marketing de Resultados)."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Performance Marketing y Growth Hacking (Marketing de Resultados)", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Performance Marketing y Growth Hacking (Marketing de Resultados) para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Performance Marketing y Growth Hacking (Marketing de Resultados)."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Performance Marketing y Growth Hacking (Marketing de Resultados)", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Performance Marketing y Growth Hacking (Marketing de Resultados).", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Performance Marketing y Growth Hacking (Marketing de Resultados)."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE803", "semestre": 8, "sem": 8, "bloque": "B1 (S1-S8)", "nombre": "Modelos de Monetización y Regulación Digital", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "SE606 - Gestión Financiera y Comercial", "moodle": "En cronograma de producción ADDIE (Fase 7)", "descripcion": "La asignatura Modelos de Monetización y Regulación Digital desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 8.3: Diseña y evalúa modelos de monetización digital garantizando la sostenibilidad financiera y el estricto cumplimiento normativo.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Modelos de Monetización y Regulación Digital en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Modelos de Monetización y Regulación Digital para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Modelos de Monetización y Regulación Digital."], "contenidos": "Arquitecturas de monetización de plataformas, economía de creadores, afiliados, publicidad programática (AdTech), regulación del comercio y publicidad digital en Colombia y el mundo (SIC, Ley 1480, derecho de la competencia, propiedad intelectual y tributación digital).", "actividades_desc": "Estudio de casos de monetización en plataformas y economía de creadores · Debate sobre regulación de influenciadores y pauta digital (Guía SIC) · Análisis de modelos de ingresos.", "eval_estrategia": "Estudio normativo y financiero", "eval_desc": "Informe estratégico sobre modelos sostenibles de monetización digital y matriz de cumplimiento regulatorio.", "eval_herramientas": "Matriz regulatoria y financiera, rúbrica", "raa": "Diseña y evalúa modelos de monetización digital garantizando la sostenibilidad financiera y el estricto cumplimiento normativo.", "enfoque_sem": "Analiza modelos avanzados de generación de ingresos digitales articulados con el marco regulatorio nacional e internacional.", "perfil_docente": "Profesional en Administración, Economía o Derecho con Maestría en Negocios Digitales o Derecho de los Negocios.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Modelos de Monetización y Regulación Digital", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Modelos de Monetización y Regulación Digital en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Modelos de Monetización y Regulación Digital."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Modelos de Monetización y Regulación Digital", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Modelos de Monetización y Regulación Digital para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Modelos de Monetización y Regulación Digital."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Modelos de Monetización y Regulación Digital", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Modelos de Monetización y Regulación Digital.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Modelos de Monetización y Regulación Digital."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE804", "semestre": 8, "sem": 8, "bloque": "B2 (S9-S16)", "nombre": "Gestión de Marca Personal y Liderazgo Digital", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Comunicación, Cultura y Tecnología Digital", "componente_nombre": "Comunicación, Cultura y Tecnología Digital", "prerrequisito": "Ninguno (Semestre VIII)", "moodle": "En cronograma de producción ADDIE (Fase 7)", "descripcion": "La asignatura Gestión de Marca Personal y Liderazgo Digital desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Comunicación, Cultura y Tecnología Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 2: Creatividad, Diseño UX/UI y Contenidos Multimedia Multiplataforma.", "rap_asociado": "RAP 8.1: Desarrolla su marca personal y ejerce liderazgo digital colaborativo con visión ética, ejecutiva y estratégica.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de Marca Personal y Liderazgo Digital en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de Marca Personal y Liderazgo Digital para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de Marca Personal y Liderazgo Digital."], "contenidos": "Arquetipo y estrategia de Marca Personal (Personal Branding), posicionamiento en LinkedIn y ecosistemas profesionales, Social Selling, liderazgo transformacional de equipos remotos/híbridos, negociación y ética directiva.", "actividades_desc": "Taller de arquitectura y narrativa de marca personal · Simulación de liderazgo de equipos digitales interdisciplinarios · Auditoría de huella y reputación profesional.", "eval_estrategia": "Plan de marca personal", "eval_desc": "Proyecto de posicionamiento de marca personal ejecutiva y estrategia de liderazgo digital.", "eval_herramientas": "Ecosistema LinkedIn/Portafolio, rúbrica", "raa": "Desarrolla su marca personal y ejerce liderazgo digital colaborativo con visión ética, ejecutiva y estratégica.", "enfoque_sem": "Desarrolla la identidad profesional ejecutiva y las habilidades directivas para liderar equipos en la economía digital.", "perfil_docente": "Profesional en Marketing o Comunicación con Maestría en Liderazgo, Dirección de Empresas o Branding.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Gestión de Marca Personal y Liderazgo Digital", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Gestión de Marca Personal y Liderazgo Digital en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Gestión de Marca Personal y Liderazgo Digital."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Gestión de Marca Personal y Liderazgo Digital", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Gestión de Marca Personal y Liderazgo Digital para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Gestión de Marca Personal y Liderazgo Digital."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Gestión de Marca Personal y Liderazgo Digital", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Gestión de Marca Personal y Liderazgo Digital.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Gestión de Marca Personal y Liderazgo Digital."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE805", "semestre": 8, "sem": 8, "bloque": "B2 (S9-S16)", "nombre": "Tendencias Globales en Marketing Digital", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "Mínimo 126 créditos aprobados", "moodle": "En cronograma de producción ADDIE (Fase 7)", "descripcion": "La asignatura Tendencias Globales en Marketing Digital desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 8: Investigación, Innovación y Prospección en Marketing Digital.", "rap_asociado": "RAP 8.2: Analiza críticamente las tendencias tecnológicas y culturales globales para anticipar transformaciones e innovar en el marketing digital.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Tendencias Globales en Marketing Digital en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Tendencias Globales en Marketing Digital para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Tendencias Globales en Marketing Digital."], "contenidos": "Innovaciones disruptivas en el ecosistema global (IA agéntica, computación espacial, realidad aumentada/virtual, Web3, Social Commerce, Retail Media, hiperpersonalización predictiva y economía circular/marketing sostenible global).", "actividades_desc": "Seminario internacional de análisis de tendencias · Foro de innovación intercultural · Análisis comparativo de mercados globales.", "eval_estrategia": "Análisis prospectivo global", "eval_desc": "Informe estratégico de vigilancia tecnológica y aplicación de tendencias globales del marketing digital.", "eval_herramientas": "Herramientas de vigilancia tecnológica, rúbrica", "raa": "Analiza críticamente las tendencias tecnológicas y culturales globales para anticipar transformaciones e innovar en el marketing digital.", "enfoque_sem": "Conecta al estudiante de último semestre con la frontera global del conocimiento y la innovación internacional.", "perfil_docente": "Profesional en Marketing con Maestría o Doctorado y experiencia internacional en tendencias digitales.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Tendencias Globales en Marketing Digital", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Tendencias Globales en Marketing Digital en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Tendencias Globales en Marketing Digital."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Tendencias Globales en Marketing Digital", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Tendencias Globales en Marketing Digital para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Tendencias Globales en Marketing Digital."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Tendencias Globales en Marketing Digital", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Tendencias Globales en Marketing Digital.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Tendencias Globales en Marketing Digital."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}, {"id": "SE806", "semestre": 8, "sem": 8, "bloque": "B2 (S9-S16)", "nombre": "Portafolio Profesional Digital", "tipo": "TP", "tipo_desc": "Teórico-Práctica", "creditos": 3, "area": "DISCIPLINAR", "area_name": "Disciplinar", "componente": "Marketing y Estrategia Digital", "componente_nombre": "Marketing y Estrategia Digital", "prerrequisito": "Mínimo 126 créditos aprobados (Proyecto Capstone)", "moodle": "En cronograma de producción ADDIE (Fase 7)", "descripcion": "La asignatura Portafolio Profesional Digital desarrolla contenidos teóricos y prácticos indispensables para la gestión del área Disciplinar (Marketing y Estrategia Digital), aportando competencias estratégicas para el perfil del egresado.", "perfil_asociado": "Competencia 1: Inteligencia de Mercados, Tendencias del Consumidor Digital y Analítica Estratégica.", "rap_asociado": "RAP 8.3: Integra y sustenta evidencias académicas y proyectos aplicados en un portafolio profesional digital que demuestra el logro del perfil de egreso.", "ras": ["Explica los conceptos fundamentales, marcos analíticos y normativos de Portafolio Profesional Digital en entornos empresariales contemporáneos.", "Utiliza herramientas técnicas, plataformas digitales y métodos de Portafolio Profesional Digital para el diagnóstico y control de estrategias.", "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Portafolio Profesional Digital."], "contenidos": "Curaduría e integración de evidencias académicas y proyectos aplicados de los 8 semestres, arquitectura web de portafolio profesional (Case Studies de estrategia, analítica, UX/UI, campañas e IA), demostración de impacto y defensa ejecutiva.", "actividades_desc": "Construcción y despliegue web del portafolio profesional digital · Mentoría y retroalimentación docente · Sustentación y defensa ante panel evaluador.", "eval_estrategia": "Portafolio final y defensa", "eval_desc": "Entrega, publicación web y defensa ejecutiva del Portafolio Profesional Digital integrador de las competencias de egreso.", "eval_herramientas": "Plataforma web de portafolio digital, rúbrica integradora", "raa": "Integra y sustenta evidencias académicas y proyectos aplicados en un portafolio profesional digital que demuestra el logro del perfil de egreso.", "enfoque_sem": "Constituye el espacio integrador de cierre (Capstone) donde el estudiante demuestra de manera tangible sus competencias ante el mercado laboral.", "perfil_docente": "Profesional en Marketing Digital con Maestría y amplia experiencia en mentoría profesional y dirección de proyectos.", "presencial": {"directa": 48, "independiente": 96, "total": 144}, "virtual": {"mediado": 36, "independiente": 108, "total": 144}, "unidades": [{"numero": 1, "fase": "Fase de Fundamentación", "porcentaje_fase": "20%", "titulo": "Unidad 1: Fundamentación Teórica y Diagnóstico de Portafolio Profesional Digital", "ra": "Explica los conceptos fundamentales, marcos analíticos y normativos de Portafolio Profesional Digital en entornos empresariales contemporáneos.", "actividades": [{"nombre": "Tarea 1: Taller Aplicativo y Diagnóstico Inicial", "porcentaje": "15%", "desc": "Elaboración de informe de diagnóstico y contextualización teórico-práctica sobre Portafolio Profesional Digital."}, {"nombre": "Quiz 1: Control de Lectura y Verificación Conceptual", "porcentaje": "5%", "desc": "Evaluación formativa individual sobre conceptos y principios fundamentales de la unidad."}]}, {"numero": 2, "fase": "Fase de Desarrollo y Aplicación", "porcentaje_fase": "25%", "titulo": "Unidad 2: Herramientas Metodológicas y Casos Prácticos de Portafolio Profesional Digital", "ra": "Utiliza herramientas técnicas, plataformas digitales y métodos de Portafolio Profesional Digital para el diagnóstico y control de estrategias.", "actividades": [{"nombre": "Tarea 2: Estudio de Caso Empresarial (ABP)", "porcentaje": "20%", "desc": "Resolución de caso real y modelación procedimental aplicando los instrumentos analíticos de Portafolio Profesional Digital."}, {"nombre": "Quiz 2: Evaluación Analítica de Casos", "porcentaje": "5%", "desc": "Verificación técnica de destrezas analíticas, cuantitativas y de análisis crítico."}]}, {"numero": 3, "fase": "Fase de Cierre y Consolidación", "porcentaje_fase": "55%", "titulo": "Unidad 3: Consolidación, Innovación y Sustentación en Portafolio Profesional Digital", "ra": "Propone alternativas de mejora operacional, innovación y sustentación orientadas a la optimización de Portafolio Profesional Digital.", "actividades": [{"nombre": "Tarea 3: Producto Integrador de la Asignatura", "porcentaje": "20%", "desc": "Desarrollo y entrega del modelo, propuesta o artefacto gerencial consolidado de Portafolio Profesional Digital."}, {"nombre": "Evaluación Final: Sustentación Integral del Resultado de Aprendizaje", "porcentaje": "35%", "desc": "Prueba de cierre integral y sustentación oral/escrita de la solución propuesta."}]}]}];
window.MKT_SUBJECTS = window.C3_SUBJECTS;
window._mktModalityMode = 'virtual'; // 'virtual' (1:3 -> 36/108) or 'presencial' (1:2 -> 48/96)
window._mktAreaFilter = 'ALL';
window._mktCompFilter = 'ALL';

window.SECTIONS['c3'] = `
<!-- BANNER DE ENCABEZADO NORMATIVO ART. 2.5.3.2.3.2.4 -->
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; padding:22px 26px; border-radius:12px; border-left:6px solid #F39200; margin-bottom:20px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#F39200; font-weight:800;">
                <i class="fas fa-sitemap"></i> Decreto 1330 de 2019 · Artículo 2.5.3.2.3.2.4
            </span>
            <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:#FFFFFF; margin-top:4px; margin-bottom:6px;">
                Condición 3 · Aspectos Curriculares · Marketing Digital (Registro Único)
            </h3>
            <p style="font-size:0.84rem; color:#E5E7EB; margin:0; max-width:880px; line-height:1.5;">
                Estructura curricular oficial aprobada por el Consejo Superior mediante <strong>Acuerdo No. 03 del 13 de marzo de 2026</strong>. <strong>144 créditos académicos · 8 semestres · 48 asignaturas de 3 créditos</strong> bajo modalidad de Registro Único (Presencial y Virtual) · <strong>Caso SACES RD32850</strong>.
            </p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span style="background:#F39200; color:#FFFFFF; font-size:0.75rem; font-weight:800; padding:6px 12px; border-radius:8px;">144 Créditos</span>
            <span style="background:rgba(255,255,255,0.15); color:#FFFFFF; font-size:0.75rem; font-weight:700; padding:6px 12px; border-radius:8px;">8 Semestres</span>
            <span style="background:#16A34A; color:#FFFFFF; font-size:0.75rem; font-weight:800; padding:6px 12px; border-radius:8px;">48 Asignaturas</span>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBPESTAÑAS CANÓNICAS DECRETO 1330 DE 2019 (ART. 2.5.3.2.3.2.4)
     ========================================================= -->
<div class="tabs-container" id="c3SubTabs">
    <div class="tabs-nav" style="border-bottom:2px solid #E5E7EB; display:flex; flex-wrap:wrap; gap:4px; margin-bottom:20px;">
        <button class="tab-btn active" data-tab="c3-formativos" onclick="switchTab('c3SubTabs','c3-formativos')">
            <i class="fas fa-graduation-cap"></i> a) Componentes Formativos
        </button>
        <button class="tab-btn" data-tab="c3-pedagogicos" onclick="switchTab('c3SubTabs','c3-pedagogicos')">
            <i class="fas fa-brain"></i> b) Componentes Pedagógicos
        </button>
        <button class="tab-btn" data-tab="c3-interaccion" onclick="switchTab('c3SubTabs','c3-interaccion')">
            <i class="fas fa-handshake"></i> c) Componentes de Interacción
        </button>
        <button class="tab-btn" data-tab="c3-epistemologicos" onclick="switchTab('c3SubTabs','c3-epistemologicos')">
            <i class="fas fa-book-reader"></i> d) Conceptualización Teórica y Epistemológica
        </button>
        <button class="tab-btn" data-tab="c3-evaluacion" onclick="switchTab('c3SubTabs','c3-evaluacion')">
            <i class="fas fa-clipboard-check"></i> e) Mecanismos de Evaluación
        </button>
    </div>

    <!-- =========================================================
         TAB A: COMPONENTES FORMATIVOS (LITERAL A)
         ========================================================= -->
    <div class="tab-panel active" id="c3-formativos" style="display:block;">
        
        <!-- BANNER DE ENCABEZADO NORMATIVO LITERAL A (DECRETO 1330 · ART. 2.5.3.2.3.2.4) -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:20px 24px; border-radius:10px; margin-bottom:20px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                        <i class="fas fa-graduation-cap"></i> Decreto 1330 de 2019 · Artículo 2.5.3.2.3.2.4 · Literal a)
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:6px;">
                        a) Componentes Formativos · Plan de Estudios Oficial (144 Créditos / 8 Semestres)
                    </h3>
                    <p style="font-size:0.83rem; color:#CBD5E1; margin:0; max-width:880px; line-height:1.5;">
                        <strong>Definición del plan general de estudios:</strong> Representado en créditos académicos conforme con los resultados de aprendizaje proyectados, la formación integral, las actividades académicas que evidencien estrategias de flexibilización curricular, y los perfiles de egreso, en armonía con las habilidades del contexto internacional, nacional y local.
                    </p>
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <span class="badge-presencial" style="background:#F39200; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-check-circle"></i> 48 Asignaturas · 144 Créditos · 8 Semestres
                    </span>
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-university"></i> Presencial: 140 Cupos (Registro Único)
                    </span>
                    <span class="badge-virtual" style="background:#0284C7; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-laptop"></i> Virtual: 140 Cupos (Registro Único)
                    </span>
                </div>
            </div>
        </div>

        <!-- 5 SUBPESTAÑAS DE COMPONENTES FORMATIVOS (SUB-PILLS BENCHMARK TO) -->
        <div class="c3-sub-pills" id="c3-f-pills" style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px; padding:10px 14px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px;">
            <button class="pill-btn active" data-sub="c3-f-malla" onclick="switchSubSection('c3-f', 'malla')">
                <i class="fas fa-table"></i> 1. Malla Curricular (Matriz Global)
            </button>
            <button class="pill-btn" data-sub="c3-f-areas" onclick="switchSubSection('c3-f', 'areas')">
                <i class="fas fa-layer-group"></i> 2. Áreas de Formación (Tabla 22 Oficial)
            </button>
            <button class="pill-btn" data-sub="c3-f-perfiles" onclick="switchSubSection('c3-f', 'perfiles')">
                <i class="fas fa-user-graduate"></i> 3. Perfil de Egreso & Competencias
            </button>
            <button class="pill-btn" data-sub="c3-f-flex" onclick="switchSubSection('c3-f', 'flex')">
                <i class="fas fa-sliders-h"></i> 4. Flexibilidad Curricular
            </button>
            <button class="pill-btn" data-sub="c3-f-rutas" onclick="switchSubSection('c3-f', 'rutas')">
                <i class="fas fa-route"></i> 5. Rutas & Requisitos de Grado
            </button>
        </div>

        <!-- CONTAINER DE SUB-SECCIONES FORMATIVAS -->
        <div id="c3-f-container">

            <!-- =========================================================
                 1. MALLA CURRICULAR (MATRIZ GLOBAL 100% PRESERVADA)
                 ========================================================= -->
            <div class="sub-panel active" id="c3-f-malla" style="display:block;">
                <div style="margin-bottom:14px; background:#F8FAFC; border:1px solid #E2E8F0; padding:12px 16px; border-radius:8px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon); margin-bottom:4px;">
                        <i class="fas fa-table" style="color:var(--orange);"></i> Matriz Global del Plan de Estudios (48 Asignaturas · 144 Créditos · 8 Semestres)
                    </h4>
                    <p style="font-size:0.83rem; color:var(--gray-text); margin-bottom:0;">
                        Visualización en matriz continua: Componentes / Áreas Curriculares × Semestres Académicos (I a VIII). Haz clic sobre cualquier tarjeta de área para ver el <strong>desagregado oficial</strong> o sobre cualquier asignatura para inspeccionar sus unidades temáticas, horas de trabajo y Resultados de Aprendizaje.
                    </p>
                </div>

                <!-- 4 TARJETAS KPI DE ÁREAS DE FORMACIÓN (CON TRIGGER A OPENAREAMODAL) -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; margin-bottom:20px;">
            <!-- ÁREA TRANSVERSAL -->
            <div class="card" onclick="openAreaModal('TRANSVERSAL')" style="background:#FFFFFF; border:1px solid #E5E7EB; border-top:4px solid #1E40AF; border-radius:10px; padding:16px; box-shadow:0 1px 3px rgba(0,0,0,0.05); cursor:pointer; transition:transform 0.15s, box-shadow 0.15s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(30,64,175,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)';" title="Clic para ver el desagregado oficial del Área Transversal">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <div style="font-size:0.72rem; font-weight:800; color:#1E40AF; text-transform:uppercase;">ÁREA TRANSVERSAL</div>
                    <span style="font-size:0.65rem; color:#1E40AF; background:#EFF6FF; padding:2px 8px; border-radius:4px; font-weight:800;"><i class="fas fa-search-plus"></i> Desagregado</span>
                </div>
                <div style="font-size:1.55rem; font-weight:900; color:#1A1A1B;">30 <span style="font-size:0.85rem; font-weight:700; color:#6B7280;">Cr (20,8%)</span></div>
                <div style="font-size:0.75rem; color:#4B5563; margin-top:4px;">10 Asignaturas · Ciencias Básicas, Idiomas B1 y Humanidades</div>
            </div>

            <!-- ÁREA DISCIPLINAR -->
            <div class="card" onclick="openAreaModal('DISCIPLINAR')" style="background:#FFFFFF; border:1px solid #E5E7EB; border-top:4px solid #F39200; border-radius:10px; padding:16px; box-shadow:0 1px 3px rgba(0,0,0,0.05); cursor:pointer; transition:transform 0.15s, box-shadow 0.15s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(243,146,0,0.18)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)';" title="Clic para ver el desagregado oficial del Área Disciplinar">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <div style="font-size:0.72rem; font-weight:800; color:#C2410C; text-transform:uppercase;">ÁREA DISCIPLINAR</div>
                    <span style="font-size:0.65rem; color:#C2410C; background:#FFF7ED; padding:2px 8px; border-radius:4px; font-weight:800;"><i class="fas fa-search-plus"></i> Desagregado</span>
                </div>
                <div style="font-size:1.55rem; font-weight:900; color:#1A1A1B;">105 <span style="font-size:0.85rem; font-weight:700; color:#6B7280;">Cr (72,9%)</span></div>
                <div style="font-size:0.75rem; color:#4B5563; margin-top:4px;">35 Asignaturas · MarTech, Estrategia, Big Data y E-commerce</div>
            </div>

            <!-- ÁREA ELECTIVA -->
            <div class="card" onclick="openAreaModal('ELECTIVA')" style="background:#FFFFFF; border:1px solid #E5E7EB; border-top:4px solid #16A34A; border-radius:10px; padding:16px; box-shadow:0 1px 3px rgba(0,0,0,0.05); cursor:pointer; transition:transform 0.15s, box-shadow 0.15s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(22,163,74,0.15)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)';" title="Clic para ver el desagregado oficial del Área Electiva">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <div style="font-size:0.72rem; font-weight:800; color:#166534; text-transform:uppercase;">ÁREA ELECTIVA</div>
                    <span style="font-size:0.65rem; color:#166534; background:#ECFDF5; padding:2px 8px; border-radius:4px; font-weight:800;"><i class="fas fa-search-plus"></i> Desagregado</span>
                </div>
                <div style="font-size:1.55rem; font-weight:900; color:#1A1A1B;">9 <span style="font-size:0.85rem; font-weight:700; color:#6B7280;">Cr (6,3%)</span></div>
                <div style="font-size:0.75rem; color:#4B5563; margin-top:4px;">3 Asignaturas · 6 Opciones de Profundización Estratégica</div>
            </div>

            <!-- TOTAL PLAN PROPUESTO -->
            <div class="card" onclick="openAreaModal('ALL')" style="background:#FFFFFF; border:1px solid #E5E7EB; border-top:4px solid #1A1A1B; border-radius:10px; padding:16px; box-shadow:0 1px 3px rgba(0,0,0,0.05); cursor:pointer; transition:transform 0.15s, box-shadow 0.15s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)';" title="Clic para ver el consolidado global de las 48 asignaturas">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <div style="font-size:0.72rem; font-weight:800; color:#1A1A1B; text-transform:uppercase;">TOTAL PLAN PROPUESTO</div>
                    <span style="font-size:0.65rem; color:#1A1A1B; background:#F3F4F6; padding:2px 8px; border-radius:4px; font-weight:800;"><i class="fas fa-search-plus"></i> Consolidado</span>
                </div>
                <div style="font-size:1.55rem; font-weight:900; color:#F39200;">144 <span style="font-size:0.85rem; font-weight:700; color:#6B7280;">Cr (100%)</span></div>
                <div style="font-size:0.75rem; color:#4B5563; margin-top:4px;">48 Asignaturas · 8 Semestres · 6.912 Horas Globales</div>
            </div>
        </div>

        <!-- CONTROLES INTERACTIVOS Y SELECTOR DE MODALIDAD -->
        <div style="background:#F8F9FA; border:1px solid #E5E7EB; border-radius:10px; padding:14px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span style="font-size:0.78rem; font-weight:800; color:#1A1A1B; text-transform:uppercase;"><i class="fas fa-clock" style="color:#F39200;"></i> Desglose Horario:</span>
                <div style="display:inline-flex; background:#FFFFFF; border:1px solid #D1D5DB; border-radius:8px; padding:2px;">
                    <button id="btnMktModVirtual" onclick="setMktModalityMode('virtual')" style="padding:6px 14px; font-size:0.78rem; font-weight:800; border:none; border-radius:6px; cursor:pointer; background:#F39200; color:#FFFFFF; transition:all 0.2s;">
                        <i class="fas fa-laptop"></i> Virtual (1:3 · 36h / 108h)
                    </button>
                    <button id="btnMktModPresencial" onclick="setMktModalityMode('presencial')" style="padding:6px 14px; font-size:0.78rem; font-weight:800; border:none; border-radius:6px; cursor:pointer; background:transparent; color:#4B5563; transition:all 0.2s;">
                        <i class="fas fa-university"></i> Presencial (1:2 · 48h / 96h)
                    </button>
                </div>
            </div>

            <!-- FILTRO POR ÁREA -->
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                <span style="font-size:0.75rem; font-weight:700; color:#4B5563;">Área:</span>
                <button class="mkt-area-btn active" onclick="filterMktMallaArea('ALL')" style="padding:4px 10px; font-size:0.72rem; font-weight:700; border:1px solid #D1D5DB; border-radius:6px; background:#1A1A1B; color:#FFFFFF; cursor:pointer;">Todas</button>
                <button class="mkt-area-btn" onclick="filterMktMallaArea('DISCIPLINAR')" style="padding:4px 10px; font-size:0.72rem; font-weight:700; border:1px solid #D1D5DB; border-radius:6px; background:#FFFFFF; color:#C2410C; cursor:pointer;">Disciplinar (35)</button>
                <button class="mkt-area-btn" onclick="filterMktMallaArea('TRANSVERSAL')" style="padding:4px 10px; font-size:0.72rem; font-weight:700; border:1px solid #D1D5DB; border-radius:6px; background:#FFFFFF; color:#1E40AF; cursor:pointer;">Transversal (10)</button>
                <button class="mkt-area-btn" onclick="filterMktMallaArea('ELECTIVA')" style="padding:4px 10px; font-size:0.72rem; font-weight:700; border:1px solid #D1D5DB; border-radius:6px; background:#FFFFFF; color:#166534; cursor:pointer;">Electiva (3)</button>
            </div>
        </div>

        <!-- INDICADOR CLIC INTERACTIVO -->
        <div style="background:#FFF7ED; padding:10px 14px; border-radius:8px; border-left:4px solid #F39200; font-size:0.78rem; color:#9A3412; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div>
                <i class="fas fa-mouse-pointer" style="color:#F39200; margin-right:6px;"></i>
                <strong>Interacción de la Malla:</strong> Haz clic sobre cualquier asignatura para desplegar la <strong>Ficha Microcurricular Forense Oficial</strong> (Trazabilidad Perfil-RAP, RAs de la asignatura, distribución de horas Decreto 1330 y estructura pedagógica de 3 unidades al 20%, 25% y 55%).
            </div>
            <span style="background:#F39200; color:#fff; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:12px;">48 Microcurrículos Auditados</span>
        </div>

        <!-- MALLA CURRICULAR INTERACTIVA SEMESTRE A SEMESTRE -->
        <div id="mktMallaContainer" style="overflow-x:auto; padding-bottom:12px; margin-bottom:24px;">
            <div id="mktMallaGrid" style="display:grid; grid-template-columns:repeat(8, minmax(170px, 1fr)); gap:10px; min-width:1380px;">
                <!-- Generado dinámicamente por renderMktMallaGrid() -->
            </div>
        </div>

        <!-- SECCIÓN: TABLA COMPLETA DE ASIGNATURAS Y BUSCADOR -->
        <div style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px; margin-bottom:24px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:#1A1A1B; margin:0;">
                        <i class="fas fa-list-check" style="color:#F39200; margin-right:6px;"></i> Matriz Oficial Consolidada de las 48 Asignaturas
                    </h4>
                    <p style="font-size:0.78rem; color:#6B7280; margin:3px 0 0 0;">
                        Explora, filtra y consulta los componentes microcurriculares de cada cátedra.
                    </p>
                </div>
                <div style="position:relative; width:280px; max-width:100%;">
                    <input type="text" id="mktTableSearchInput" onkeyup="searchMktSubjects()" placeholder="Buscar por asignatura, código o área..." style="width:100%; padding:7px 12px 7px 32px; border:1px solid #D1D5DB; border-radius:6px; font-size:0.78rem; box-sizing:border-box;">
                    <i class="fas fa-search" style="position:absolute; left:10px; top:10px; color:#9CA3AF; font-size:0.8rem;"></i>
                </div>
            </div>

            <div style="overflow-x:auto; max-height:480px; border:1px solid #E5E7EB; border-radius:8px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.76rem; text-align:left;">
                    <thead style="position:sticky; top:0; background:#F8FAFC; border-bottom:2px solid #D1D5DB; z-index:2;">
                        <tr style="color:#1A1A1B; font-weight:800;">
                            <th style="padding:8px 10px; width:45px;">Sem</th>
                            <th style="padding:8px 10px; width:75px;">Código</th>
                            <th style="padding:8px 10px;">Nombre de la Asignatura</th>
                            <th style="padding:8px 10px; width:55px; text-align:center;">Créd</th>
                            <th style="padding:8px 10px;">Área</th>
                            <th style="padding:8px 10px;">Componente</th>
                            <th style="padding:8px 10px; width:65px; text-align:center;">Tipo</th>
                            <th style="padding:8px 10px; width:95px;">Bloque</th>
                            <th style="padding:8px 10px; width:80px; text-align:center;">Ficha</th>
                        </tr>
                    </thead>
                    <tbody id="mktSubjectsTableBody">
                        <!-- Generado dinámicamente -->
                    </tbody>
                </table>
            </div>
        </div>
            </div>

            <!-- =========================================================
                 2. ÁREAS DE FORMACIÓN (TABLA 22 OFICIAL)
                 ========================================================= -->
            <div class="sub-panel" id="c3-f-areas" style="display:none;">
                <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:20px; border-radius:10px; margin-bottom:20px; border-left:6px solid #2563EB;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div>
                            <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:#38BDF8; font-weight:800;">
                                <i class="fas fa-certificate"></i> Cuadros Maestros Oficiales · Documento Maestro [Tabla 22]
                            </span>
                            <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:4px;">
                                Distribución de Créditos y Horas por Áreas de Formación (Plan Oficial 144 Créditos)
                            </h3>
                            <p style="font-size:0.84rem; color:#CBD5E1; margin:0; max-width:920px; line-height:1.5;">
                                Información oficial extraída con fidelidad 100% de la <strong>Tabla 22</strong> (Áreas de Formación, propósitos formativos y competencias) y <strong>Tabla 41</strong> del Documento Maestro radicado ante el MEN / SACES. Haz clic en cualquier tarjeta de área para abrir la <strong>Ventana Emergente con el desagregado completo</strong>.
                            </p>
                        </div>
                        <div style="display:flex; gap:8px;">
                            <span class="badge-presencial" style="background:#2563EB; color:#fff; font-size:0.78rem; padding:4px 12px; border-radius:20px; font-weight:800;">
                                <i class="fas fa-layer-group"></i> 3 Áreas de Formación
                            </span>
                            <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.78rem; padding:4px 12px; border-radius:20px; font-weight:800;">
                                <i class="fas fa-check-circle"></i> 48 Asignaturas · 144 Créditos
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 4 KPI CARDS TABLA 22 CLICKEABLES -->
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; margin-bottom:24px;">
                    <div class="card" style="border-top:4px solid #1E40AF; text-align:center; cursor:pointer; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px; transition:transform 0.2s, box-shadow 0.2s;" onclick="openAreaModal('TRANSVERSAL')" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(30,64,175,0.2)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';" title="Clic para desplegar ventana emergente del Área Transversal">
                        <div style="font-size:1.8rem; font-weight:900; color:#1E40AF;">30 cr</div>
                        <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:#1A1A1B;">Área Transversal</h4>
                        <p style="font-size:0.78rem; color:#6B7280; margin:0;">10 Asignaturas (<strong>20,83%</strong>)</p>
                        <div style="margin-top:8px; font-size:0.74rem; font-weight:700; color:#1D4ED8; background:#EFF6FF; padding:4px 8px; border-radius:5px;">
                            <i class="fas fa-chalkboard"></i> 8 Teóricas (24 cr) · 2 Teórico-Prácticas (6 cr)
                        </div>
                        <div style="margin-top:8px; font-size:0.72rem; color:#0284C7; font-weight:800;">
                            <i class="fas fa-external-link-alt"></i> Clic para ver ventana emergente
                        </div>
                    </div>

                    <div class="card" style="border-top:4px solid #F39200; text-align:center; cursor:pointer; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px; transition:transform 0.2s, box-shadow 0.2s;" onclick="openAreaModal('DISCIPLINAR')" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(243,146,0,0.25)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';" title="Clic para desplegar ventana emergente del Área Disciplinar">
                        <div style="font-size:1.8rem; font-weight:900; color:#F39200;">105 cr</div>
                        <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:#1A1A1B;">Área Disciplinar</h4>
                        <p style="font-size:0.78rem; color:#6B7280; margin:0;">35 Asignaturas (<strong>72,92%</strong>)</p>
                        <div style="margin-top:8px; font-size:0.74rem; font-weight:700; color:#C2410C; background:#FFF7ED; padding:4px 8px; border-radius:5px;">
                            <i class="fas fa-tools"></i> 10 Teóricas (30 cr) · 25 Teórico-Prácticas (75 cr)
                        </div>
                        <div style="margin-top:8px; font-size:0.72rem; color:#EA580C; font-weight:800;">
                            <i class="fas fa-external-link-alt"></i> Clic para ver ventana emergente
                        </div>
                    </div>

                    <div class="card" style="border-top:4px solid #16A34A; text-align:center; cursor:pointer; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px; transition:transform 0.2s, box-shadow 0.2s;" onclick="openAreaModal('ELECTIVA')" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(22,163,74,0.2)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';" title="Clic para desplegar ventana emergente del Área Electiva">
                        <div style="font-size:1.8rem; font-weight:900; color:#16A34A;">9 cr</div>
                        <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:#1A1A1B;">Área Electiva</h4>
                        <p style="font-size:0.78rem; color:#6B7280; margin:0;">3 Asignaturas (<strong>6,25%</strong>)</p>
                        <div style="margin-top:8px; font-size:0.74rem; font-weight:700; color:#15803D; background:#ECFDF5; padding:4px 8px; border-radius:5px;">
                            <i class="fas fa-sliders-h"></i> 3 Teóricas (9 cr) · 6 Opciones de Profundización
                        </div>
                        <div style="margin-top:8px; font-size:0.72rem; color:#16A34A; font-weight:800;">
                            <i class="fas fa-external-link-alt"></i> Clic para ver ventana emergente
                        </div>
                    </div>

                    <div class="card" style="border-top:4px solid #1A1A1B; text-align:center; cursor:pointer; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px; transition:transform 0.2s, box-shadow 0.2s;" onclick="openAreaModal('ALL')" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';" title="Clic para desplegar consolidado global">
                        <div style="font-size:1.8rem; font-weight:900; color:#1A1A1B;">144 cr</div>
                        <h4 style="font-size:0.92rem; margin-top:4px; margin-bottom:2px; color:#1A1A1B;">Total Plan Oficial</h4>
                        <p style="font-size:0.78rem; color:#6B7280; margin:0;">48 Asignaturas (<strong>100,0%</strong>)</p>
                        <div style="margin-top:8px; font-size:0.74rem; font-weight:700; color:#1F2937; background:#F3F4F6; padding:4px 8px; border-radius:5px;">
                            <i class="fas fa-balance-scale"></i> 21 Teóricas (43,75%) · 27 Teórico-Prácticas (56,25%)
                        </div>
                        <div style="margin-top:8px; font-size:0.72rem; color:#1A1A1B; font-weight:800;">
                            <i class="fas fa-external-link-alt"></i> Clic para ver consolidado
                        </div>
                    </div>
                </div>

                <!-- TABLA 22 MAESTRA -->
                <div style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px; margin-bottom:24px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                        <i class="fas fa-table" style="color:#2563EB; margin-right:6px;"></i> Tabla 22 Oficial: Caracterización Curricular por Áreas de Formación (Documento Maestro)
                    </h4>
                    <div style="overflow-x:auto;">
                        <table style="width:100%; border-collapse:collapse; font-size:0.8rem; text-align:left;">
                            <thead>
                                <tr style="background:#F8FAFC; border-bottom:2px solid #E2E8F0;">
                                    <th style="padding:10px 12px; width:140px;">Área de Formación</th>
                                    <th style="padding:10px 12px;">Propósito Formativo</th>
                                    <th style="padding:10px 12px; width:220px;">Tipo de Competencias</th>
                                    <th style="padding:10px 12px; width:90px; text-align:center;">Créditos</th>
                                    <th style="padding:10px 12px; width:90px; text-align:center;">Asignaturas</th>
                                    <th style="padding:10px 12px; width:90px; text-align:center;">Porcentaje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom:1px solid #E2E8F0;">
                                    <td style="padding:12px; font-weight:800; color:#1E40AF;"><i class="fas fa-square" style="color:#1E40AF; margin-right:4px;"></i> Transversal</td>
                                    <td style="padding:12px; color:#4B5563; line-height:1.5;">Fortalecer la ética, la comunicación, la ciudadanía, el razonamiento cuantitativo y las competencias digitales básicas con segunda lengua curricularizada (B1).</td>
                                    <td style="padding:12px; color:#374151; font-weight:600;">Blandas, comunicativas, ciudadanas y éticas.</td>
                                    <td style="padding:12px; text-align:center; font-weight:800; color:#1E40AF;">30</td>
                                    <td style="padding:12px; text-align:center; font-weight:700;">10</td>
                                    <td style="padding:12px; text-align:center; font-weight:800; background:#F8FAFC;">20,83%</td>
                                </tr>
                                <tr style="border-bottom:1px solid #E2E8F0;">
                                    <td style="padding:12px; font-weight:800; color:#C2410C;"><i class="fas fa-square" style="color:#F39200; margin-right:4px;"></i> Disciplinar</td>
                                    <td style="padding:12px; color:#4B5563; line-height:1.5;">Desarrollar conocimientos teóricos y técnicos del marketing digital, la analítica web, Big Data, comercio electrónico, inteligencia artificial y la gestión estratégica omnicanal.</td>
                                    <td style="padding:12px; color:#374151; font-weight:600;">Profesionales, cognitivas, tecnológicas y analíticas.</td>
                                    <td style="padding:12px; text-align:center; font-weight:800; color:#C2410C;">105</td>
                                    <td style="padding:12px; text-align:center; font-weight:700;">35</td>
                                    <td style="padding:12px; text-align:center; font-weight:800; background:#F8FAFC;">72,92%</td>
                                </tr>
                                <tr style="border-bottom:1px solid #E2E8F0;">
                                    <td style="padding:12px; font-weight:800; color:#166534;"><i class="fas fa-square" style="color:#16A34A; margin-right:4px;"></i> Electiva</td>
                                    <td style="padding:12px; color:#4B5563; line-height:1.5;">Promover la autonomía, la especialización flexible y la exploración de tendencias contemporáneas del mercadeo (Growth Marketing, Neuromarketing, E-commerce Avanzado).</td>
                                    <td style="padding:12px; color:#374151; font-weight:600;">Innovadoras, adaptativas y de aprendizaje permanente.</td>
                                    <td style="padding:12px; text-align:center; font-weight:800; color:#166534;">9</td>
                                    <td style="padding:12px; text-align:center; font-weight:700;">3</td>
                                    <td style="padding:12px; text-align:center; font-weight:800; background:#F8FAFC;">6,25%</td>
                                </tr>
                                <tr style="background:#F8FAFC; font-weight:900; border-top:2px solid #CBD5E1;">
                                    <td style="padding:12px; color:#1A1A1B;">TOTAL PLAN OFICIAL</td>
                                    <td style="padding:12px; color:#1A1A1B;">Estructura curricular de 8 semestres aprobada mediante Acuerdo del Consejo Superior No. 03/2026.</td>
                                    <td style="padding:12px; color:#1A1A1B;">Competencias integrales del perfil de egreso (MNC Nivel 7).</td>
                                    <td style="padding:12px; text-align:center; color:#F39200; font-size:0.95rem;">144</td>
                                    <td style="padding:12px; text-align:center; color:#1A1A1B; font-size:0.95rem;">48</td>
                                    <td style="padding:12px; text-align:center; color:#1A1A1B; font-size:0.95rem;">100,0%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- =========================================================
                 3. PERFIL DE EGRESO & COMPETENCIAS
                 ========================================================= -->
            <div class="sub-panel" id="c3-f-perfiles" style="display:none;">
                <div style="background:linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%); color:#fff; padding:20px 24px; border-radius:10px; margin-bottom:20px; border-left:6px solid #3B82F6; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:#93C5FD; font-weight:800;">
                        <i class="fas fa-user-graduate"></i> Numerales 3.2 y 3.5 · Documento Maestro Oficial [P787 a 807 y P1973 a 2004]
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:4px;">
                        Perfil de Egreso, Competencias y Resultados de Aprendizaje del Programa (RAP 1 a 26)
                    </h3>
                    <p style="font-size:0.84rem; color:#CBD5E1; margin:0; max-width:920px; line-height:1.5;">
                        Alineación explícita entre el perfil profesional, el perfil ocupacional (CNO/CUOC/MNC Nivel 7), las 5 dimensiones competenciales y la matriz institucional de 8 competencias con sus 26 Resultados de Aprendizaje del Programa (RAPs) con tributación directa desde las 48 asignaturas.
                    </p>
                </div>

                <!-- TARJETAS DE PERFIL PROFESIONAL Y OCUPACIONAL -->
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-bottom:24px;">
                    <div class="card" style="border-left:5px solid #0284C7; background:#FFFFFF; border-radius:10px; padding:18px; border:1px solid #E5E7EB; border-left-width:5px;">
                        <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                            <i class="fas fa-user-tie" style="color:#0284C7;"></i> Perfil Profesional del Egresado
                        </h4>
                        <p style="font-size:0.82rem; color:#4B5563; line-height:1.55; margin-bottom:8px;">
                            El profesional en Marketing Digital de la Corporación Escuela Tecnológica del Oriente es un <strong>estratega integral</strong> capaz de analizar, diseñar, implementar y optimizar acciones de comunicación y mercadeo en entornos digitales, respondiendo a las dinámicas del mercado global y a los retos de la transformación tecnológica.
                        </p>
                        <p style="font-size:0.82rem; color:#4B5563; line-height:1.55; margin:0;">
                            Su formación le permite comprender el comportamiento del consumidor digital, interpretar datos mediante analítica web e IA, aplicar metodologías ágiles y liderar con ética la creación de experiencias de valor y modelos de negocio sostenibles en organizaciones nacionales e internacionales.
                        </p>
                    </div>

                    <div class="card" style="border-left:5px solid #16A34A; background:#FFFFFF; border-radius:10px; padding:18px; border:1px solid #E5E7EB; border-left-width:5px;">
                        <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                            <i class="fas fa-briefcase" style="color:#16A34A;"></i> Perfil Ocupacional y Ámbitos de Desempeño
                        </h4>
                        <div style="font-size:0.78rem; color:#374151; display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:8px;">
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Director de Marketing Digital</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Planner de Campañas Digitales</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Brand Manager Digital</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Performance Analyst & Big Data</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Community & Social Media Mgr</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Especialista SEO / SEM</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Diseñador UX/UI Specialist</div>
                            <div><i class="fas fa-check" style="color:#16A34A; margin-right:4px;"></i> Consultor CRM & Customer Exp.</div>
                        </div>
                        <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:6px 10px; border-radius:6px; font-size:0.72rem; color:#166534; font-weight:700;">
                            <i class="fas fa-award"></i> Articulación: CNO/CUOC (2134, 2431, 2166, 2513, 2521, 1324) · Nivel 7 Marco Nacional de Cualificaciones (MNC).
                        </div>
                    </div>
                </div>

                <!-- 5 DIMENSIONES COMPETENCIALES -->
                <div style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px; margin-bottom:24px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                        <i class="fas fa-cubes" style="color:#F39200; margin-right:6px;"></i> 5 Dimensiones Competenciales del Perfil de Egreso (Documento Maestro P1982-2004)
                    </h4>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px;">
                        <div style="background:#F8FAFC; border-left:3px solid #1E40AF; padding:10px; border-radius:6px;">
                            <div style="font-weight:800; font-size:0.78rem; color:#1E40AF;">1. Estratégicas y Analíticas</div>
                            <div style="font-size:0.72rem; color:#4B5563; margin-top:4px;">Decisiones basadas en datos, modelos predictivos, inteligencia de mercados y optimización de ROI.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #F39200; padding:10px; border-radius:6px;">
                            <div style="font-weight:800; font-size:0.78rem; color:#C2410C;">2. Comunicativas y Creativas</div>
                            <div style="font-size:0.72rem; color:#4B5563; margin-top:4px;">Storytelling digital, branding experiencial, diseño UX/UI y marketing de contenidos omnicanal.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #16A34A; padding:10px; border-radius:6px;">
                            <div style="font-weight:800; font-size:0.78rem; color:#166534;">3. Técnicas y Tecnológicas</div>
                            <div style="font-size:0.72rem; color:#4B5563; margin-top:4px;">Dominio de suites MarTech, automatización CRM, e-commerce, ciberseguridad y plataformas digitales.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #7C3AED; padding:10px; border-radius:6px;">
                            <div style="font-weight:800; font-size:0.78rem; color:#6D28D9;">4. Investigativas y de Innovación</div>
                            <div style="font-size:0.72rem; color:#4B5563; margin-top:4px;">Formulación de proyectos aplicados, prospección de tendencias emergentes y soluciones con IA generativa.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #0891B2; padding:10px; border-radius:6px;">
                            <div style="font-weight:800; font-size:0.78rem; color:#0E7490;">5. Éticas y Sociohumanísticas</div>
                            <div style="font-size:0.72rem; color:#4B5563; margin-top:4px;">Protección de datos (Ley 1581/2012), liderazgo colaborativo, inclusión y compromiso social sostenible.</div>
                        </div>
                    </div>
                </div>

                <!-- MATRIZ DE 8 COMPETENCIAS Y 26 RAPS -->
                <div style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                        <i class="fas fa-bullseye" style="color:#059669; margin-right:6px;"></i> Matriz Institucional: 8 Competencias y 26 RAPs Oficiales (Tablas 34–38 DM)
                    </h4>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px;">
                        <div style="background:#F8FAFC; border-left:3px solid #1E40AF; padding:12px; border-radius:6px;">
                            <strong style="color:#1E40AF; font-size:0.78rem;">Competencia 1 · Inteligencia de Mercados (RAP 1–3):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Comprende las dinámicas del consumidor digital, modelos de atribución y analítica predictiva de mercado.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Fundamentos de Marketing Digital, Fundamentos Contables, Matemática.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #F39200; padding:12px; border-radius:6px;">
                            <strong style="color:#C2410C; font-size:0.78rem;">Competencia 2 · Creatividad y Contenidos (RAP 4–7):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Diseña estrategias de contenido multimedia, arquitectura UX/UI y branding digital multiplataforma.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Comunicación y Ecosistemas, Branding, Publicidad Digital.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #16A34A; padding:12px; border-radius:6px;">
                            <strong style="color:#166534; font-size:0.78rem;">Competencia 3 · Ecosistemas y MarTech (RAP 8–10):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Implementa arquitecturas tecnológicas de marketing, automatización, CRM y flujos omnicanal.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Competencias Digitales, Marketing Automation, CRM.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #7C3AED; padding:12px; border-radius:6px;">
                            <strong style="color:#6D28D9; font-size:0.78rem;">Competencia 4 · Analítica y Big Data (RAP 11–14):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Interpreta grandes volúmenes de datos para optimizar presupuestos, pauta publicitaria y retorno de inversión (ROI).</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Analítica Web, Big Data, Medición de Rendimiento y ROI.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #0891B2; padding:12px; border-radius:6px;">
                            <strong style="color:#0E7490; font-size:0.78rem;">Competencia 5 · E-commerce y Negocios (RAP 15–17):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Diseña y gestiona tiendas virtuales, pasarelas de pago, modelos B2B/B2C y logística digital.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Comercio Electrónico, Pasarelas de Pago, Modelos Digitales.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #EA580C; padding:12px; border-radius:6px;">
                            <strong style="color:#C2410C; font-size:0.78rem;">Competencia 6 · Estrategia y Dirección (RAP 18–20):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Formula planes estratégicos de mercadeo digital y lidera equipos interdisciplinarios con mentalidad ágil.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Fundamentos de Administración, Dirección Estratégica, Performance.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #DC2626; padding:12px; border-radius:6px;">
                            <strong style="color:#B91C1C; font-size:0.78rem;">Competencia 7 · Ética y Ciberseguridad (RAP 21–23):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Aplica la Ley 1581 de 2012 de protección de datos, ciberseguridad y principios de inclusión digital.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Cátedra de la Paz, Bioética, Protección de Datos y Ciberseguridad.</div>
                        </div>
                        <div style="background:#F8FAFC; border-left:3px solid #059669; padding:12px; border-radius:6px;">
                            <strong style="color:#047857; font-size:0.78rem;">Competencia 8 · Innovación y Prospección (RAP 24–26):</strong>
                            <div style="font-size:0.74rem; color:#4B5563; margin-top:4px;">Formula proyectos de investigación e innovación aplicando IA generativa y tecnologías emergentes.</div>
                            <div style="font-size:0.7rem; color:#6B7280; margin-top:4px;"><strong>Asignaturas Clave:</strong> Seminario de Investigación, Innovación y Prospección Digital.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- =========================================================
                 4. FLEXIBILIDAD CURRICULAR
                 ========================================================= -->
            <div class="sub-panel" id="c3-f-flex" style="display:none;">
                <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px; border-radius:10px; margin-bottom:24px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div>
                            <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                                <i class="fas fa-certificate"></i> Numeral 3.6.3 · Documento Maestro Oficial [P1155 a 1210]
                            </span>
                            <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:4px;">
                                3.6.3. Estrategias de Flexibilidad para el Desarrollo del Programa (Plan Oficial 144 Créditos)
                            </h3>
                            <p style="font-size:0.84rem; color:#CBD5E1; margin:0; max-width:920px; line-height:1.5;">
                                Marco conceptual, dimensiones de flexibilización pedagógica, estrategias institucionales y operativas del programa de Marketing Digital radicado ante el MEN / SACES.
                            </p>
                        </div>
                        <div style="display:flex; gap:8px; flex-wrap:wrap;">
                            <span class="badge-presencial" style="background:#F39200; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                                <i class="fas fa-sliders-h"></i> 4 Dimensiones Institucionales
                            </span>
                            <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                                <i class="fas fa-layer-group"></i> 6 Niveles Curriculares
                            </span>
                            <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                                <i class="fas fa-calendar-alt"></i> Bloques de 8 Semanas
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 1. CONCEPCIÓN DEL CURRÍCULO FLEXIBLE -->
                <div class="card" style="margin-bottom:24px; border-top:4px solid #2563EB; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                        <i class="fas fa-compass" style="color:#2563EB; margin-right:8px;"></i> 1. Concepción de la Flexibilidad en el Enfoque Pedagógico Institucional (TO)
                    </h4>
                    <div style="font-size:0.84rem; color:#334155; line-height:1.65; margin:0;">
                        <p style="margin-bottom:10px;">
                            El <strong>Enfoque Pedagógico de la Corporación Escuela Tecnológica del Oriente</strong> se caracteriza por promover el <strong>desarrollo autónomo del estudiante</strong>, en atención a sus necesidades, afinidades e intereses vocacionales, favoreciendo la flexibilidad académica y administrativa. Hace referencia a las diferentes <strong>rutas de aprendizaje</strong> que ofrece el programa para posibilitar la formación del estudiante de tal forma que pueda organizar su plan de estudios y elegir de acuerdo con sus intereses académicos y profesionales.
                        </p>
                        <p style="margin:0;">
                            La flexibilidad curricular articula el desarrollo del conocimiento con las capacidades y talentos individuales, la acción, los contextos del aprendizaje, los ritmos de asimilación, las alternativas de diversificación de saberes y la <strong>autonomía del estudiante para apropiar el sistema de créditos (144 créditos)</strong>, proponiendo sus propias rutas de aprendizaje en la economía digital contemporánea.
                        </p>
                    </div>
                </div>

                <!-- 2. LAS 4 DIMENSIONES DE FLEXIBILIZACIÓN INSTITUCIONAL -->
                <div class="card" style="margin-bottom:24px; border-top:4px solid #059669; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:14px;">
                        <i class="fas fa-cubes" style="color:#059669; margin-right:8px;"></i> 2. Cuatro Dimensiones de la Flexibilización Institucional (TO)
                    </h4>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
                        <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:5px solid #059669; border-radius:8px; padding:16px;">
                            <div style="font-weight:800; color:#14532D; font-size:0.95rem; margin-bottom:6px;">
                                <i class="fas fa-graduation-cap" style="color:#059669; margin-right:6px;"></i> a) Flexibilidad Pedagógica
                            </div>
                            <p style="font-size:0.82rem; color:#166534; line-height:1.55; margin:0;">
                                Permite al estudiante la <strong>gestión de su propio aprendizaje ("el qué y el cómo")</strong>, su autorregulación y la adquisición/desarrollo de competencias a través de una <strong>delegación progresiva</strong> de actividades formativas a lo largo de la malla.
                            </p>
                        </div>

                        <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-left:5px solid #2563EB; border-radius:8px; padding:16px;">
                            <div style="font-weight:800; color:#1E3A8A; font-size:0.95rem; margin-bottom:6px;">
                                <i class="fas fa-chalkboard-teacher" style="color:#2563EB; margin-right:6px;"></i> b) Flexibilidad en la Enseñanza
                            </div>
                            <p style="font-size:0.82rem; color:#1E40AF; line-height:1.55; margin:0;">
                                Los docentes actúan como facilitadores apoyando y acompañando con estrategias de formación activa (ABP, simulación en plataformas MarTech, análisis de casos de marcas reales) para la <strong>transferencia directa del conocimiento</strong>.
                            </p>
                        </div>

                        <div style="background:#FFFBEB; border:1px solid #FDE68A; border-left:5px solid #D97706; border-radius:8px; padding:16px;">
                            <div style="font-weight:800; color:#78350F; font-size:0.95rem; margin-bottom:6px;">
                                <i class="fas fa-laptop-code" style="color:#D97706; margin-right:6px;"></i> c) Flexibilidad en el Aprendizaje
                            </div>
                            <p style="font-size:0.82rem; color:#92400E; line-height:1.55; margin:0;">
                                El estudiante elige formas, espacios académicos y momentos de estudio en función de sus requerimientos personales y laborales, respaldado por la mediación tecnológica en <strong>Moodle 5.2</strong> y el ecosistema <strong>TecnoMod</strong>.
                            </p>
                        </div>

                        <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-left:5px solid #7C3AED; border-radius:8px; padding:16px;">
                            <div style="font-weight:800; color:#581C87; font-size:0.95rem; margin-bottom:6px;">
                                <i class="fas fa-cogs" style="color:#7C3AED; margin-right:6px;"></i> d) Flexibilidad en la Gestión del Programa
                            </div>
                            <p style="font-size:0.82rem; color:#6B21A8; line-height:1.55; margin:0;">
                                Sistema de admisión inclusivo, autoevaluación continua, apertura a redes internacionales (Alianza UIDE, COIL) y homologación ágil para garantizar la movilidad académica y el tránsito formativo.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 3. LOS 6 NIVELES DE EXPRESIÓN Y ELECTIVAS DE PROFUNDIZACIÓN -->
                <div style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:18px;">
                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                        <i class="fas fa-list-ul" style="color:#F39200; margin-right:6px;"></i> Catálogo de Asignaturas Electivas de Profundización (Semestres V, VI y VII · 9 Créditos)
                    </h4>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px;">
                        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #1E40AF; padding:12px; border-radius:8px;">
                            <div style="font-weight:800; font-size:0.82rem; color:#1E40AF;">Electiva I (Semestre V · 3 cr)</div>
                            <div style="font-size:0.75rem; color:#374151; margin-top:4px;"><strong>Opción A:</strong> Growth Marketing y Experimentación Rápida.</div>
                            <div style="font-size:0.75rem; color:#374151; margin-top:2px;"><strong>Opción B:</strong> Neuromarketing y Psicología del Consumidor Digital.</div>
                        </div>
                        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #F39200; padding:12px; border-radius:8px;">
                            <div style="font-weight:800; font-size:0.82rem; color:#C2410C;">Electiva II (Semestre VI · 3 cr)</div>
                            <div style="font-size:0.75rem; color:#374151; margin-top:4px;"><strong>Opción A:</strong> E-commerce Avanzado, Marketplace y Logística Digital.</div>
                            <div style="font-size:0.75rem; color:#374151; margin-top:2px;"><strong>Opción B:</strong> Computación Espacial, Realidad Aumentada y Metaverso.</div>
                        </div>
                        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #16A34A; padding:12px; border-radius:8px;">
                            <div style="font-weight:800; font-size:0.82rem; color:#166534;">Electiva III (Semestre VII · 3 cr)</div>
                            <div style="font-size:0.75rem; color:#374151; margin-top:4px;"><strong>Opción A:</strong> Modelos de Negocio en Red y Monetización Digital.</div>
                            <div style="font-size:0.75rem; color:#374151; margin-top:2px;"><strong>Opción B:</strong> Marketing Automation Avanzado y Ecosistemas MarTech.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- =========================================================
                 5. RUTAS & REQUISITOS DE GRADO
                 ========================================================= -->
            <div class="sub-panel" id="c3-f-rutas" style="display:none;">
                <div style="background:linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%); color:#fff; padding:24px; border-radius:12px; margin-bottom:24px; border-left:6px solid #3B82F6; box-shadow:0 8px 20px rgba(0,0,0,0.12);">
                    <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#93C5FD; font-weight:800; margin-bottom:6px;">
                        <i class="fas fa-route"></i> Numerales 3.6.4 y 3.6.5 · Documento Maestro Oficial [P1211 a 1250]
                    </div>
                    <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:8px;">
                        Rutas Formativas, Trayectoria de Aprendizaje y Opciones de Requisitos de Grado
                    </h3>
                    <p style="color:#E2E8F0; font-size:0.86rem; line-height:1.6; margin-bottom:14px; max-width:980px;">
                        Teniendo en cuenta la modalidad de formación virtual y presencial del programa académico, se realiza un ejercicio organizado como un conjunto de actividades específicas (ruta), mediante las cuales se promueven procesos académicos para desarrollar progresivamente el nivel de pensamiento del estudiante, con el propósito de alcanzar los resultados de aprendizaje de acuerdo con el nivel de formación universitaria.
                    </p>
                    <div style="display:flex; gap:10px; flex-wrap:wrap;">
                        <span style="background:rgba(255,255,255,0.15); color:#fff; padding:4px 10px; border-radius:6px; font-size:0.76rem; font-weight:700;">
                            <i class="fas fa-calendar-alt"></i> Bloques Bimestrales de 8 Semanas
                        </span>
                        <span style="background:rgba(255,255,255,0.15); color:#fff; padding:4px 10px; border-radius:6px; font-size:0.76rem; font-weight:700;">
                            <i class="fas fa-graduation-cap"></i> 8 Semestres Académicos (144 Créditos)
                        </span>
                        <span style="background:rgba(255,255,255,0.15); color:#fff; padding:4px 10px; border-radius:6px; font-size:0.76rem; font-weight:700;">
                            <i class="fas fa-book"></i> 48 Asignaturas Curriculares
                        </span>
                        <span style="background:rgba(255,255,255,0.15); color:#fff; padding:4px 10px; border-radius:6px; font-size:0.76rem; font-weight:700;">
                            <i class="fas fa-file-contract"></i> Acuerdo CS No. 14/2022 (Opciones de Grado)
                        </span>
                    </div>
                </div>

                <!-- 3 PILARES DE LA TRAYECTORIA FORMATIVA -->
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:24px;">
                    <div class="card" style="border-top:4px solid #2563EB; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px;">
                        <h5 style="font-size:0.92rem; font-weight:800; color:#1E3A8A; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                            <i class="fas fa-brain" style="color:#2563EB;"></i> 1. Autoconstrucción y Aprendizaje Progresivo
                        </h5>
                        <p style="font-size:0.81rem; color:#4B5563; line-height:1.55; margin:0;">
                            La trayectoria no es una simple serie de prerrequisitos rígidos, sino una estrategia para desarrollar progresivamente habilidades, competencias y valores, guiando al estudiante en la autoconstrucción del conocimiento para sustentar el perfil de egreso.
                        </p>
                    </div>
                    <div class="card" style="border-top:4px solid #7C3AED; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px;">
                        <h5 style="font-size:0.92rem; font-weight:800; color:#5B21B6; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                            <i class="fas fa-layer-group" style="color:#7C3AED;"></i> 2. Esquema Modular de 8 Semanas
                        </h5>
                        <p style="font-size:0.81rem; color:#4B5563; line-height:1.55; margin:0;">
                            El programa organiza cada semestre en dos bloques intensivos bimestrales: <strong>Bloque 1 (Semana 1 a 8)</strong> y <strong>Bloque 2 (Semana 9 a 16)</strong>. Esta dosificación modular reduce la dispersión cognitiva y maximiza la permanencia estudiantil.
                        </p>
                    </div>
                    <div class="card" style="border-top:4px solid #059669; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:10px; padding:16px;">
                        <h5 style="font-size:0.92rem; font-weight:800; color:#065F46; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                            <i class="fas fa-balance-scale" style="color:#059669;"></i> 3. Tríada Compleja de Formación
                        </h5>
                        <p style="font-size:0.81rem; color:#4B5563; line-height:1.55; margin:0;">
                            Involucra la vivencia activa del estudiante en la síntesis compleja de <strong>teoría (saber conocer)</strong>, <strong>práctica (saber hacer)</strong> y <strong>ética (saber ser)</strong>, garantizando el dominio holístico del profesional en Marketing Digital.
                        </p>
                    </div>
                </div>

                <!-- REQUISITOS DE GRADO Y OPCIONES DE GRADO -->
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px;">
                    <div class="card" style="background:#FFFFFF; border:1px solid #E5E7EB; border-top:4px solid #F39200; border-radius:10px; padding:18px;">
                        <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                            <i class="fas fa-graduation-cap" style="color:#F39200; margin-right:6px;"></i> Requisitos Institucionales de Grado (DM P1213-1220)
                        </h4>
                        <div style="display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:#374151;">
                            <div style="display:flex; align-items:flex-start; gap:8px;">
                                <i class="fas fa-check-circle" style="color:#059669; margin-top:2px;"></i>
                                <span><strong>100% de Créditos:</strong> Cursar y aprobar la totalidad de las 48 asignaturas (144 créditos).</span>
                            </div>
                            <div style="display:flex; align-items:flex-start; gap:8px;">
                                <i class="fas fa-check-circle" style="color:#059669; margin-top:2px;"></i>
                                <span><strong>Opción de Grado:</strong> Aprobar una de las modalidades válidas según el Reglamento institucional.</span>
                            </div>
                            <div style="display:flex; align-items:flex-start; gap:8px;">
                                <i class="fas fa-check-circle" style="color:#059669; margin-top:2px;"></i>
                                <span><strong>Segunda Lengua B1:</strong> Aprobación de competencias en idioma inglés (Inglés I, II y III curricularizados).</span>
                            </div>
                            <div style="display:flex; align-items:flex-start; gap:8px;">
                                <i class="fas fa-check-circle" style="color:#059669; margin-top:2px;"></i>
                                <span><strong>Pruebas Saber Pro:</strong> Certificado oficial de presentación de las pruebas de Estado.</span>
                            </div>
                            <div style="display:flex; align-items:flex-start; gap:8px;">
                                <i class="fas fa-check-circle" style="color:#059669; margin-top:2px;"></i>
                                <span><strong>Paz y Salvo:</strong> Paz y salvo por todo concepto académico, financiero y administrativo con TO.</span>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background:#FFFFFF; border:1px solid #E5E7EB; border-top:4px solid #1E40AF; border-radius:10px; padding:18px;">
                        <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-top:0; margin-bottom:12px;">
                            <i class="fas fa-award" style="color:#1E40AF; margin-right:6px;"></i> 5 Opciones de Grado Reglamentadas (Acuerdo CS 14/2022)
                        </h4>
                        <div style="display:flex; flex-direction:column; gap:10px; font-size:0.79rem; color:#374151;">
                            <div style="background:#F8FAFC; padding:8px 12px; border-radius:6px; border-left:3px solid #1E40AF;">
                                <strong>1. Proyecto de Investigación:</strong> Desarrollo de producto investigativo articulado con las líneas del grupo COLLEGIUM y semilleros.
                            </div>
                            <div style="background:#F8FAFC; padding:8px 12px; border-radius:6px; border-left:3px solid #F39200;">
                                <strong>2. Diplomado de Profundización:</strong> Actualización avanzada en temáticas de vanguardia (Growth Marketing, MarTech o Analítica).
                            </div>
                            <div style="background:#F8FAFC; padding:8px 12px; border-radius:6px; border-left:3px solid #16A34A;">
                                <strong>3. Primer Semestre de Posgrado:</strong> Cursar y aprobar el primer semestre de un posgrado en TO garantizando continuidad.
                            </div>
                            <div style="background:#F8FAFC; padding:8px 12px; border-radius:6px; border-left:3px solid #7C3AED;">
                                <strong>4. Emprendimiento e Innovación:</strong> Formulación y validación de modelo de negocio digital con tracción demostrable.
                            </div>
                            <div style="background:#F8FAFC; padding:8px 12px; border-radius:6px; border-left:3px solid #0891B2;">
                                <strong>5. Práctica Profesional:</strong> Aplicación práctica in situ en organizaciones aliadas de la red CUEES y convenios empresariales.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
<!-- =========================================================
         TAB B: COMPONENTES PEDAGÓGICOS (LITERAL B)
         ========================================================= -->
    <div class="tab-panel" id="c3-pedagogicos" style="display:none;">
        <!-- BANNER DE ENCABEZADO NORMATIVO ART. 2.5.3.2.3.2.4 LITERAL B -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px 24px; border-radius:10px; margin-bottom:20px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                        <i class="fas fa-brain"></i> Decreto 1330 de 2019 · Artículo 2.5.3.2.3.2.4 · Literal b)
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:6px;">
                        b) Componentes Pedagógicos · Lineamientos e Innovación según Modalidad (Registro Calificado Nuevo (144 Créditos - 8 Semestres))
                    </h3>
                    <p style="font-size:0.83rem; color:#CBD5E1; margin:0; max-width:850px; line-height:1.5;">
                        <strong>Lineamientos e innovación pedagógica y didáctica:</strong> Estrategias didácticas integradas al programa en coherencia con las modalidades presencial y virtual, fundamentadas en el modelo socioformativo, la taxonomía institucional y el aprendizaje activo centrado en el estudiante.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span class="badge-presencial" style="background:#F39200; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-lightbulb"></i> Modelo Actualizado 2021
                    </span>
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-sync-alt"></i> Tríada Saber-Ser-Hacer
                    </span>
                </div>
            </div>
        </div>

        <!-- 1. MODELO PEDAGÓGICO INSTITUCIONAL Y REFERENTES -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0;">
                    <i class="fas fa-university" style="color:var(--orange); margin-right:8px;"></i> 1. Modelo Pedagógico "Formación en Contextos de Aplicación"
                </h4>
                <span style="font-size:0.75rem; color:#D97706; background:#FEF3C7; padding:3px 10px; border-radius:6px; font-weight:700;">
                    PEI Institucional · Lema: "Aprender a convertirse"
                </span>
            </div>
            <p style="font-size:0.85rem; color:#334155; line-height:1.65; margin-bottom:16px;">
                La Corporación Escuela Tecnológica del Oriente fundamenta su modelo pedagógico en el <strong>Constructivismo Social</strong> (Vygotsky, Piaget), la <strong>Escuela Nueva</strong> (Dewey, Freinet) y el <strong>Aprendizaje Significativo</strong> (Ausubel). Su propósito rector es empoderar al estudiante en su capacidad de autotransformación y en la transformación de su entorno organizacional mediante la construcción colectiva y colaborativa del conocimiento gerencial.
            </p>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
                <!-- Bloom -->
                <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-left:4px solid #F97316; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#C2410C; margin-bottom:6px;">
                        <i class="fas fa-layer-group"></i> Benjamin Bloom (Taxonomía)
                    </div>
                    <p style="font-size:0.78rem; color:#431407; line-height:1.55; margin:0;">
                        Adopción institucional de la taxonomía cognitiva de 6 niveles: <em>Recordar &rarr; Comprender &rarr; Aplicar &rarr; Analizar &rarr; Evaluar &rarr; Crear</em>, aplicada a la progresión del plan de estudios.
                    </p>
                </div>
                <!-- Tobón -->
                <div style="background:#F0FDF4; border:1px solid #DCFCE7; border-left:4px solid #16A34A; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#15803D; margin-bottom:6px;">
                        <i class="fas fa-users-cog"></i> Sergio Tobón (Socioformativo)
                    </div>
                    <p style="font-size:0.78rem; color:#14532D; line-height:1.55; margin:0;">
                        Enfoque de competencias complejas orientadas a la solución de problemas del contexto, el proyecto ético de vida y el trabajo colaborativo en escenarios reales.
                    </p>
                </div>
                <!-- Tríada -->
                <div style="background:#FAF5FF; border:1px solid #F3E8FF; border-left:4px solid #9333EA; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#7E22CE; margin-bottom:6px;">
                        <i class="fas fa-cubes"></i> Activación de la Tríada
                    </div>
                    <p style="font-size:0.78rem; color:#581C87; line-height:1.55; margin:0;">
                        Activación sistemática de <strong>Saber</strong> (cognitivo), <strong>Ser</strong> (actitudinal/ético) y <strong>Hacer</strong> (procedimental) ante situaciones problémicas de las organizaciones.
                    </p>
                </div>
            </div>
        </div>

        <!-- 2. LINEAMIENTOS POR MODALIDAD: PRESENCIAL Y VIRTUAL -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #0284C7;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-chalkboard-teacher" style="color:#0284C7; margin-right:8px;"></i> 2. Innovación Pedagógica y Didáctica según Modalidad (Presencial & Virtual)
            </h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                <!-- Presencial -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #F39200; border-radius:8px; padding:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <h5 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:800; color:#1E293B; margin:0;">
                            <i class="fas fa-chalkboard" style="color:#F39200;"></i> Modalidad Presencial (Bucaramanga)
                        </h5>
                        <span style="font-size:0.7rem; color:#F39200; background:#FFF7ED; padding:2px 8px; border-radius:4px; font-weight:700;">Relación 1:2 (16h directas / 32h indep)</span>
                    </div>
                    <ul style="font-size:0.78rem; color:#475569; line-height:1.6; padding-left:18px; margin:0;">
                        <li><strong>Interacción Directa en Aula:</strong> Clases participativas, debates gerenciales y talleres de aplicación inmediata en campus.</li>
                        <li><strong>Trabajo en Laboratorios de Gestión:</strong> Uso de herramientas informáticas empresariales y análisis financiero en salas de cómputo especializadas.</li>
                        <li><strong>Seminarios de Discusión:</strong> Talleres de casos empresariales y asesoría metodológica cara a cara con docentes tutores.</li>
                        <li><strong>Acompañamiento Docente Continuo:</strong> Monitoreo presencial del desarrollo de proyectos de aula y preparación para Saber Pro.</li>
                    </ul>
                </div>
                <!-- Virtual -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #0284C7; border-radius:8px; padding:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <h5 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:800; color:#1E293B; margin:0;">
                            <i class="fas fa-laptop" style="color:#0284C7;"></i> Modalidad Virtual (Cobertura Nacional)
                        </h5>
                        <span style="font-size:0.7rem; color:#0284C7; background:#F0F9FF; padding:2px 8px; border-radius:4px; font-weight:700;">Relación 1:3 (12h mediadas / 36h indep)</span>
                    </div>
                    <ul style="font-size:0.78rem; color:#475569; line-height:1.6; padding-left:18px; margin:0;">
                        <li><strong>Ecosistema Digital TO (LMS Moodle):</strong> Aulas estructuradas tecnopedagógicamente con guías de aprendizaje y recursos hipermediales 24/7.</li>
                        <li><strong>Espacios Sincrónicos Dialógicos:</strong> Sesiones semanales de encuentro en vivo para resolución de dudas, asesoría de casos y debate, no para cátedra pasiva.</li>
                        <li><strong>Espacios Asincrónicos de Interacción:</strong> Foros temáticos estructurados con retroalimentación cualitativa y rúbricas de debate.</li>
                        <li><strong>Aprendizaje Autónomo y Adaptativo:</strong> Diseño instruccional que promueve la autorregulación cognitiva, el microlearning y el ritmo individual.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 3. METODOLOGÍAS ACTIVAS Y LOS 6 LINEAMIENTOS DEL PEI -->
        <div class="card" style="margin-bottom:20px; border-top:4px solid #16A34A;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-tools" style="color:#16A34A; margin-right:8px;"></i> 3. Metodologías Activas y los 6 Lineamientos Institucionales de Innovación Didáctica (PEI)
            </h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#C2410C; margin-bottom:4px;">
                        <i class="fas fa-user-check"></i> 1. Enfoque centrado en el estudiante:
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        Aprendizaje Basado en Problemas (ABP), Método del Caso y Aprendizaje Basado en Proyectos.
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#0284C7; margin-bottom:4px;">
                        <i class="fas fa-microchip"></i> 2. Integración tecnológica:
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        Campus Digital, entornos virtuales interactivos, analítica de aprendizaje y herramientas colaborativas.
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#16A34A; margin-bottom:4px;">
                        <i class="fas fa-puzzle-piece"></i> 3. Currículo contextualizado:
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        Diseñado para responder a los cambios dinámicos del mercado laboral y las tendencias de sostenibilidad.
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#DC2626; margin-bottom:4px;">
                        <i class="fas fa-heart"></i> 4. Competencias socioemocionales:
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        Liderazgo ético, resiliencia, comunicación asertiva y toma de decisiones bajo incertidumbre.
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#7C3AED; margin-bottom:4px;">
                        <i class="fas fa-universal-access"></i> 5. Inclusión y equidad:
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        Accesibilidad universal, respeto por la diversidad y democratización de la educación profesional.
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#D97706; margin-bottom:4px;">
                        <i class="fas fa-check-double"></i> 6. Evaluación formativa e innovadora:
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        Rúbricas analíticas, portafolios digitales, proyectos integradores y retroalimentación oportuna.
                    </p>
                </div>
            </div>
        </div>
    </div>

<!-- =========================================================
         TAB C: COMPONENTES DE INTERACCIÓN (LITERAL C)
         ========================================================= -->
    <div class="tab-panel" id="c3-interaccion" style="display:none;">
        <!-- BANNER DE ENCABEZADO NORMATIVO ART. 2.5.3.2.3.2.4 LITERAL C -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px 24px; border-radius:10px; margin-bottom:20px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                        <i class="fas fa-handshake"></i> Decreto 1330 de 2019 · Artículo 2.5.3.2.3.2.4 · Literal c)
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:6px;">
                        c) Componentes de Interacción · Contextos, Internacionalización y Segunda Lengua (Registro Calificado Nuevo (144 Créditos - 8 Semestres))
                    </h3>
                    <p style="font-size:0.83rem; color:#CBD5E1; margin:0; max-width:850px; line-height:1.5;">
                        <strong>Creación y fortalecimiento de vínculos:</strong> Armonización del programa con los contextos locales, regionales y globales; desarrollo de habilidades de interrelación estudiante-profesor y entre pares; condiciones de internacionalización del currículo y formación en segunda lengua.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-globe-americas"></i> Alianza UIDE (Ecuador)
                    </span>
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-language"></i> Inglés B1 Curricularizado (9 cr)
                    </span>
                </div>
            </div>
        </div>

        <!-- =========================================================
             BLOQUE MAESTRO DE EDUCACIÓN VIRTUAL (ACUERDO INSTITUCIONAL)
             ========================================================= -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #059669; background:#FAFDFB;">
            <div style="border-bottom:1px solid #E2E8F0; padding-bottom:14px; margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <span style="font-size:0.72rem; text-transform:uppercase; font-weight:800; color:#059669; letter-spacing:0.5px;">
                        Lineamiento de Educación Virtual · Acuerdo Institucional
                    </span>
                    <span style="font-size:0.72rem; color:#64748B;">
                        <i class="fas fa-check-circle" style="color:#059669;"></i> Anexos 1, 2 y 3 Oficiales
                    </span>
                </div>
                <h4 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:800; color:#064E3B; margin:4px 0 8px 0;">
                    <i class="fas fa-network-wired" style="color:#059669; margin-right:8px;"></i> Modelo de Interacción Pedagógica, Estrategias Didácticas y Gestión en Plataforma LMS
                </h4>
                <p style="font-size:0.83rem; color:#334155; line-height:1.6; margin:0;">
                    En coherencia con el modelo pedagógico socioformativo institucional y la relación <strong>1:3 de créditos académicos</strong> en modalidad virtual (12h de mediación docente y 36h de trabajo autónomo e independiente), la institución despliega una interacción activa y multidimensional soportada en 4 dimensiones estratégicas y 8 actividades formativas integradas en el Syllabus de cada asignatura:
                </p>
            </div>

            <!-- 1. LAS 4 DIMENSIONES DE LA EDUCACIÓN VIRTUAL -->
            <div style="margin-bottom:18px;">
                <div style="font-size:0.8rem; font-weight:800; color:#1E293B; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">
                    <i class="fas fa-sitemap" style="color:#F39200;"></i> Cuatro Dimensiones del Lineamiento de Educación Virtual (Anexo 2):
                </div>
                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
                    <div style="background:#FFF; border:1px solid #CBD5E1; border-top:3px solid #0284C7; border-radius:6px; padding:12px;">
                        <div style="font-weight:800; font-size:0.78rem; color:#0369A1; margin-bottom:4px;">
                            <i class="fas fa-user-graduate"></i> 1. Dimensión Pedagógica
                        </div>
                        <p style="font-size:0.72rem; color:#475569; line-height:1.45; margin:0;">
                            Aprendizaje activo, formación en contextos reales de aplicación, desarrollo de competencias prácticas y reflexivas, autonomía y autorregulación del estudiante.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #CBD5E1; border-top:3px solid #059669; border-radius:6px; padding:12px;">
                        <div style="font-weight:800; font-size:0.78rem; color:#047857; margin-bottom:4px;">
                            <i class="fas fa-comments"></i> 2. Dimensión Comunicativa
                        </div>
                        <p style="font-size:0.72rem; color:#475569; line-height:1.45; margin:0;">
                            Acompañamiento continuo sincrónico y asincrónico, foros de debate guiados, tutorías de refuerzo y canales dialógicos multidireccionales docente-estudiante y entre pares.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #CBD5E1; border-top:3px solid #7C3AED; border-radius:6px; padding:12px;">
                        <div style="font-weight:800; font-size:0.78rem; color:#6D28D9; margin-bottom:4px;">
                            <i class="fas fa-server"></i> 3. Dimensión Tecnológica
                        </div>
                        <p style="font-size:0.72rem; color:#475569; line-height:1.45; margin:0;">
                            Campus Virtual LMS Moodle sobre arquitectura en la nube AWS elástica (disponibilidad 99.9%), Teams/Meet para sesiones en vivo y motor de originalidad académica.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #CBD5E1; border-top:3px solid #D97706; border-radius:6px; padding:12px;">
                        <div style="font-weight:800; font-size:0.78rem; color:#B45309; margin-bottom:4px;">
                            <i class="fas fa-cogs"></i> 4. Dimensión Organizacional
                        </div>
                        <p style="font-size:0.72rem; color:#475569; line-height:1.45; margin:0;">
                            Mesa de ayuda TI con Matriz de Tiempos de Respuesta a Requerimientos, gobernanza académica, aseguramiento de permanencia y gestión curricular ágil.
                        </p>
                    </div>
                </div>
            </div>

            <!-- 2. LAS 8 ESTRATEGIAS PEDAGÓGICAS Y DIDÁCTICAS ACTIVAS -->
            <div style="margin-bottom:18px;">
                <div style="font-size:0.8rem; font-weight:800; color:#1E293B; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">
                    <i class="fas fa-chalkboard-teacher" style="color:#059669;"></i> Ocho Estrategias Didácticas de Interacción en el Syllabus de Cada Asignatura:
                </div>
                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#0284C7; margin-bottom:3px;">
                            <i class="fas fa-video"></i> 1. Clases Sincrónicas
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Sesiones en vivo programadas en Moodle (Teams/Meet), participativas, grabadas y de consulta 24/7 permanente.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#D97706; margin-bottom:3px;">
                            <i class="fas fa-photo-video"></i> 2. Recursos Asincrónicos (RED)
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Videos explicativos, lecturas, infografías, podcasts, bases de datos y bancos de preguntas de navegación autónoma.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#059669; margin-bottom:3px;">
                            <i class="fas fa-comments"></i> 3. Foros de Debate
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Análisis de casos prácticos a partir de preguntas orientadoras con argumentación y retroalimentación entre pares.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#7C3AED; margin-bottom:3px;">
                            <i class="fas fa-headset"></i> 4. Mesa de Ayuda TI
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Soporte técnico y administrativo oportuno regido por la Matriz de Tiempos de Respuesta Institucional.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#DC2626; margin-bottom:3px;">
                            <i class="fas fa-tasks"></i> 5. Aprendizaje Activo
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Actividades cooperativas y colaborativas centradas en la resolución de problemas reales para alcanzar los RAPs.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#059669; margin-bottom:3px;">
                            <i class="fas fa-clipboard-check"></i> 6. Evaluación Formativa
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Pruebas diagnósticas, cuestionarios interactivos, autoevaluación por unidad y rúbricas de evaluación significativa.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#0284C7; margin-bottom:3px;">
                            <i class="fas fa-users"></i> 7. Trabajo Colaborativo
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Dinámicas grupales mediadas por herramientas digitales para potenciar negociación y resolución de conflictos.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:700; font-size:0.76rem; color:#B45309; margin-bottom:3px;">
                            <i class="fas fa-user-clock"></i> 8. Tutorías Virtuales
                        </div>
                        <p style="font-size:0.7rem; color:#64748B; line-height:1.4; margin:0;">
                            Sesiones de atención individual y grupal agendadas directamente por el docente en Moodle para refuerzo continuo.
                        </p>
                    </div>
                </div>
            </div>

            <!-- 3. ESTRUCTURA ESTÁNDAR Y GESTIÓN DOCENTE -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:12px;">
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:6px; padding:12px;">
                    <div style="font-size:0.76rem; font-weight:800; color:#1E40AF; margin-bottom:6px;">
                        <i class="fas fa-cube"></i> Estructura Estándar de las Aulas Virtuales en Moodle (5 Ejes):
                    </div>
                    <ul style="font-size:0.72rem; color:#1E3A8A; line-height:1.55; padding-left:16px; margin:0;">
                        <li><strong>1. Gestión del Aprendizaje:</strong> Guía de aprendizaje, ruta formativa, syllabus y cronograma.</li>
                        <li><strong>2. Comunicación y Colaboración:</strong> Foros de dudas, foros temáticos y mensajería directa.</li>
                        <li><strong>3. Evaluación y Seguimiento:</strong> Entregables con motor de similitud, rúbricas y libro de calificaciones.</li>
                        <li><strong>4. Recursos y Soporte TI:</strong> Enlaces a biblioteca E-Libro, simuladores y mesa de ayuda.</li>
                        <li><strong>5. Competencias Digitales:</strong> Guías interactivas y videos instructivos de uso de la plataforma.</li>
                    </ul>
                </div>
                <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:6px; padding:12px;">
                    <div style="font-size:0.76rem; font-weight:800; color:#92400E; margin-bottom:6px;">
                        <i class="fas fa-user-tie"></i> Distribución Porcentual del Tiempo de Dedicación Docente:
                    </div>
                    <p style="font-size:0.72rem; color:#78350F; line-height:1.55; margin:0;">
                        &bull; <strong>50% Docencia:</strong> 30% Espacios sincrónicos (Teams/Meet) &middot; 5% Tutorías académicas &middot; 5% Foros de debate &middot; 10% Revisión y retroalimentación de entregables.<br>
                        &bull; <strong>15% Investigación:</strong> Semillero de investigación del programa, Grupo COLLEGIUM y dirección de proyectos.<br>
                        &bull; <strong>10% Proyección Social:</strong> Seguimiento de prácticas, internacionalización y extensión.<br>
                        &bull; <strong>10% Gestión y Permanencia:</strong> Preparación de clases, seguimiento a permanencia y cualificación.<br>
                        &bull; <em>Aplica armónicamente para profesores de Tiempo Completo (TC - 40h) y Medio Tiempo (MT - 22h).</em>
                    </p>
                </div>
            </div>

            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:8px 12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
                <span style="font-size:0.72rem; color:#166534;">
                    <i class="fas fa-check-circle" style="color:#16A34A;"></i> <strong>Modelo de Producción de Recursos Digitales (Anexo 3):</strong> Criterios de accesibilidad, interactividad, multimedia, adaptabilidad, actualización periódica y articulación curricular.
                </span>
                <span style="font-size:0.7rem; color:#15803D; font-weight:700;">Aprobado por Consejo Académico</span>
            </div>
        </div>

        <!-- 1. ARTICULACIÓN CON EL SECTOR EXTERNO -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #EA580C;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-city" style="color:#EA580C; margin-right:8px;"></i> 1. Articulación del Programa con Contextos Locales, Regionales y Globales (3.9.1)
            </h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                <div>
                    <h5 style="font-family:var(--font-heading); font-size:0.88rem; font-weight:800; color:#1E293B; margin-bottom:8px;">
                        <i class="fas fa-handshake" style="color:#EA580C;"></i> Alianzas con el Sector Productivo y Gremios
                    </h5>
                    <p style="font-size:0.78rem; color:#475569; line-height:1.6; margin-bottom:10px;">
                        El programa de Marketing Digital se articula activamente con el tejido empresarial a través del <strong>Comité Universidad-Empresa-Estado-Sociedad (CUEES Santander)</strong>, la <strong>Cámara de Comercio de Bucaramanga</strong>, <strong>FENALCO</strong> y gremios vinculados a la transformación tecnológica y los servicios digitales.
                    </p>
                    <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-radius:6px; padding:10px; font-size:0.75rem; color:#9A3412; line-height:1.5;">
                        <i class="fas fa-bullseye"></i> <strong>Centro CIDRE:</strong> A través del Centro de Innovación, Desarrollo y Responsabilidad Empresarial se gestionan proyectos de consultoría aplicada y analítica digital para mipymes de la región.
                    </div>
                </div>
                <div>
                    <h5 style="font-family:var(--font-heading); font-size:0.88rem; font-weight:800; color:#1E293B; margin-bottom:8px;">
                        <i class="fas fa-rocket" style="color:#0284C7;"></i> Ecosistema Emprendedor e Inserción Laboral
                    </h5>
                    <p style="font-size:0.78rem; color:#475569; line-height:1.6; margin-bottom:10px;">
                        Los estudiantes desarrollan iniciativas aplicadas en el marco del <strong>Ecosistema Emprendedor TO</strong>, estructurando planes de mercadeo digital, comercio electrónico y crecimiento para negocios reales en entornos locales y globales.
                    </p>
                    <div style="background:#F0F9FF; border:1px solid #E0F2FE; border-radius:6px; padding:10px; font-size:0.75rem; color:#0369A1; line-height:1.5;">
                        <i class="fas fa-briefcase"></i> <strong>Proyección Profesional:</strong> Formación orientada a roles de alta demanda laboral: Growth Marketer, Content Strategist, Trafficker Digital, Analista de Datos y Consultor MarTech.
                    </div>
                </div>
            </div>
        </div>

        <!-- 2. HABILIDADES DE INTERRELACIÓN Y ACOMPAÑAMIENTO -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #0284C7;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-people-arrows" style="color:#0284C7; margin-right:8px;"></i> 2. Habilidades de Interrelación Estudiante-Profesor y Entre Pares (3.9.2)
            </h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.82rem; color:#0369A1; margin-bottom:6px;">
                        <i class="fas fa-chalkboard"></i> Interrelación en Modalidad Presencial
                    </div>
                    <ul style="font-size:0.75rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                        <li>Tutorías académicas individualizadas en campus.</li>
                        <li>Talleres prácticos en salas de cómputo especializadas.</li>
                        <li>Asesorías directas cara a cara para proyectos de grado.</li>
                        <li>Monitoreo continuo para la permanencia estudiantil.</li>
                    </ul>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.82rem; color:#059669; margin-bottom:6px;">
                        <i class="fas fa-laptop-code"></i> Interrelación en Modalidad Virtual
                    </div>
                    <ul style="font-size:0.75rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                        <li>Encuentros sincrónicos interactivos semanales (Teams/Meet).</li>
                        <li>Foros dialógicos moderados por el docente tutor.</li>
                        <li>Mensajería instantánea interna en LMS Moodle (SLA &lt;24h).</li>
                        <li>Protocolo estandarizado de retroalimentación cualitativa.</li>
                    </ul>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.82rem; color:#7C3AED; margin-bottom:6px;">
                        <i class="fas fa-users"></i> Dinámicas Colaborativas Entre Pares
                    </div>
                    <ul style="font-size:0.75rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                        <li>Desarrollo de proyectos de marketing en equipos multidisciplinarios.</li>
                        <li>Evaluación constructiva entre pares (coevaluación).</li>
                        <li>Debates en foros con argumentación conceptual y técnica.</li>
                        <li>Resolución colaborativa de retos y simulaciones empresariales.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 3. INTERNACIONALIZACIÓN Y SEGUNDA LENGUA -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
            <!-- Internacionalización -->
            <div class="card" style="border-top:4px solid #16A34A;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--dark); margin:0;">
                        <i class="fas fa-globe-americas" style="color:#16A34A; margin-right:6px;"></i> 3. Internacionalización del Currículo (3.9.2)
                    </h4>
                    <span style="font-size:0.7rem; color:#166534; background:#DCFCE7; padding:2px 8px; border-radius:4px; font-weight:700;">Tabla 39 Oficial DM</span>
                </div>
                <p style="font-size:0.78rem; color:#475569; line-height:1.6; margin-bottom:12px;">
                    El programa cuenta con un plan de internacionalización activo que incorpora la cooperación académica transfronteriza y la inserción de competencias globales:
                </p>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:10px; margin-bottom:10px;">
                    <div style="font-weight:800; font-size:0.76rem; color:#15803D; margin-bottom:4px;">
                        <i class="fas fa-handshake"></i> Convenio con la Universidad Internacional del Ecuador (UIDE):
                    </div>
                    <p style="font-size:0.72rem; color:#166534; line-height:1.5; margin:0;">
                        Alianza interinstitucional formal para movilidad docente y estudiantil, desarrollo de clases espejo, proyectos de investigación conjunta y cátedras internacionales en marketing digital.
                    </p>
                </div>
                <ul style="font-size:0.74rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                    <li><strong>Metodología COIL:</strong> Proyectos colaborativos en línea entre estudiantes de TO y universidades extranjeras aliadas.</li>
                    <li><strong>Cátedra Global:</strong> Participación de conferencistas y directores de agencias internacionales en seminarios web.</li>
                    <li><strong>Misiones Académicas:</strong> Participación en eventos, congresos y redes iberoamericanas de mercadeo digital.</li>
                </ul>
            </div>

            <!-- Segunda Lengua -->
            <div class="card" style="border-top:4px solid #7C3AED;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--dark); margin:0;">
                        <i class="fas fa-language" style="color:#7C3AED; margin-right:6px;"></i> 4. Competencias en Segunda Lengua (3.9.3)
                    </h4>
                    <span style="font-size:0.7rem; color:#6D28D9; background:#F3E8FF; padding:2px 8px; border-radius:4px; font-weight:700;">Nivel B1 MCER</span>
                </div>
                <p style="font-size:0.78rem; color:#475569; line-height:1.6; margin-bottom:12px;">
                    El dominio del idioma inglés está <strong>100% curricularizado</strong> dentro del plan de estudios oficial para garantizar la competitividad internacional del egresado:
                </p>
                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-bottom:12px;">
                    <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:6px; padding:8px; text-align:center;">
                        <div style="font-weight:800; font-size:0.74rem; color:#7E22CE;">Inglés I</div>
                        <div style="font-size:0.68rem; color:#6B21A8;">Semestre II &middot; 3 Cr</div>
                    </div>
                    <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:6px; padding:8px; text-align:center;">
                        <div style="font-weight:800; font-size:0.74rem; color:#7E22CE;">Inglés II</div>
                        <div style="font-size:0.68rem; color:#6B21A8;">Semestre III &middot; 3 Cr</div>
                    </div>
                    <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:6px; padding:8px; text-align:center;">
                        <div style="font-weight:800; font-size:0.74rem; color:#7E22CE;">Inglés III</div>
                        <div style="font-size:0.68rem; color:#6B21A8;">Semestre IV &middot; 3 Cr</div>
                    </div>
                </div>
                <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:6px; padding:10px; font-size:0.74rem; color:#92400E; line-height:1.5;">
                    <i class="fas fa-award"></i> <strong>Requisito Curricular Obligatorio:</strong> 9 créditos académicos (432 horas) reglamentados según el <strong>Acuerdo del Consejo Superior No. 015 de 2024</strong>, con apoyo de la plataforma Cambridge One y pruebas de suficiencia.
                </div>
            </div>
        </div>
    </div>

<!-- =========================================================
         TAB D: CONCEPTUALIZACIÓN TEÓRICA Y EPISTEMOLÓGICA (LITERAL D)
         ========================================================= -->
    <div class="tab-panel" id="c3-epistemologicos" style="display:none;">
        <!-- BANNER DE ENCABEZADO NORMATIVO ART. 2.5.3.2.3.2.4 LITERAL D -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px 24px; border-radius:10px; margin-bottom:20px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                        <i class="fas fa-book-reader"></i> Decreto 1330 de 2019 · Artículo 2.5.3.2.3.2.4 · Literal d)
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:6px;">
                        d) Conceptualización Teórica y Epistemológica del Programa (Registro Calificado Nuevo (144 Créditos - 8 Semestres))
                    </h3>
                    <p style="font-size:0.83rem; color:#CBD5E1; margin:0; max-width:850px; line-height:1.5;">
                        <strong>Fundamentación conceptual rigurosa:</strong> Enfoque transdisciplinar que articula la comunicación, la tecnología, la economía y la ciencia de datos en la creación de valor en ecosistemas digitales complejos y sostenibles.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span class="badge-presencial" style="background:#F39200; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-project-diagram"></i> Enfoque Transdisciplinar
                    </span>
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-database"></i> Big Data & MarTech
                    </span>
                </div>
            </div>
        </div>

        <!-- 1. OBJETO DE ESTUDIO DEL PROGRAMA -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0;">
                    <i class="fas fa-bullseye" style="color:var(--orange); margin-right:8px;"></i> 1. Naturaleza del Objeto de Estudio de Marketing Digital (Numeral 3.5.1 DM)
                </h4>
                <span style="font-size:0.75rem; color:#B45309; background:#FEF3C7; padding:3px 10px; border-radius:6px; font-weight:700;">
                    MNC Nivel 7 · Pregrado Universitario
                </span>
            </div>
            <p style="font-size:0.85rem; color:#334155; line-height:1.65; margin-bottom:14px;">
                El objeto de estudio del programa de Marketing Digital de la Corporación Escuela Tecnológica del Oriente se centra en la <strong>comprensión, análisis, diseño, gestión y optimización de las estrategias, procesos y herramientas que integran la comunicación, la tecnología y los negocios en entornos digitales</strong>. Su propósito rector es formar profesionales capaces de liderar procesos de transformación digital en organizaciones, emprendimientos y marcas, mediante la aplicación de estrategias de marketing innovadoras, éticas y sostenibles, fundamentadas en el uso estratégico de la información y la inteligencia de datos.
            </p>

            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:16px;">
                <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#C2410C; margin-bottom:4px;">
                        <i class="fas fa-chart-line"></i> 1. Gestión Estratégica del Marketing
                    </div>
                    <p style="font-size:0.74rem; color:#431407; line-height:1.5; margin:0;">
                        Combina la comunicación, la economía y la tecnología para el posicionamiento competitivo y la generación de valor en marcas y organizaciones.
                    </p>
                </div>
                <div style="background:#F0F9FF; border:1px solid #E0F2FE; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#0369A1; margin-bottom:4px;">
                        <i class="fas fa-digital-tachograph"></i> 2. Transformación Digital y Plataformas
                    </div>
                    <p style="font-size:0.74rem; color:#0C4A6E; line-height:1.5; margin:0;">
                        Redefine las relaciones entre empresas, consumidores y plataformas interactivas, promoviendo la innovación en productos y experiencias de usuario.
                    </p>
                </div>
                <div style="background:#F0FDF4; border:1px solid #DCFCE7; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#15803D; margin-bottom:4px;">
                        <i class="fas fa-brain"></i> 3. Analítica e Inteligencia de Datos
                    </div>
                    <p style="font-size:0.74rem; color:#14532D; line-height:1.5; margin:0;">
                        Aplica Big Data, algoritmos predictivos e IA como base empírica para la segmentación, personalización y optimización de resultados y ROI.
                    </p>
                </div>
            </div>

            <!-- Diferenciación frente a otros programas -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                <div style="font-size:0.78rem; font-weight:800; color:#1E293B; margin-bottom:6px;">
                    <i class="fas fa-balance-scale" style="color:#F39200;"></i> Diferenciación Epistemológica frente a Programas Afines (DM P876):
                </div>
                <p style="font-size:0.74rem; color:#475569; line-height:1.55; margin:0;">
                    A diferencia de programas como Administración de Empresas (gestión organizacional), Comunicación Social (comunicación mediática), Publicidad (creatividad publicitaria) o Ingeniería de Sistemas (desarrollo técnico), <strong>Marketing Digital en TO articula de manera equilibrada la estrategia de mercadeo, la analítica cuantitativa de datos, la tecnología (MarTech) y la creatividad comunicativa</strong> en un solo cuerpo formativo interdisciplinar.
                </p>
            </div>
        </div>

        <!-- 2. LAS 4 GRANDES CORRIENTES TEÓRICAS Y EPISTEMOLÓGICAS (DM P881-P898) -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #0284C7;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-layer-group" style="color:#0284C7; margin-right:8px;"></i> 2. Los 4 Fundamentos Teóricos y Epistemológicos Oficiales (Numeral 3.5.2 DM)
            </h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                <!-- 1. Marketing y Estrategia -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #F39200; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#C2410C; margin-bottom:6px;">
                        <i class="fas fa-chess-knight"></i> 1. Marketing y Estrategia Digital
                    </div>
                    <p style="font-size:0.75rem; color:#334155; line-height:1.55; margin-bottom:8px;">
                        <strong>Referentes Canónicos:</strong> Philip Kotler & Kevin Keller (2016 - Marketing Estratégico y Valor), Leonard Berry (1983 - Marketing Relacional), Robert Morgan & Shelby Hunt (1994 - Confianza y Redes), Bernd Schmitt (1999 - Marketing Experiencial), Damian Ryan (2017) y Dave Chaffey & Fiona Ellis-Chadwick (2019 - Enfoque Data-Driven).
                    </p>
                    <div style="background:#FFF7ED; border-radius:6px; padding:8px; font-size:0.72rem; color:#9A3412;">
                        <strong>Asignaturas Clave:</strong> Fundamentos de Marketing Digital, Estrategias de Marketing Digital, Neuromarketing, Performance Marketing y Growth Hacking.
                    </div>
                </div>

                <!-- 2. Comunicación y Cultura -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #0284C7; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#0369A1; margin-bottom:6px;">
                        <i class="fas fa-network-wired"></i> 2. Comunicación, Cultura y Tecnología Digital
                    </div>
                    <p style="font-size:0.75rem; color:#334155; line-height:1.55; margin-bottom:8px;">
                        <strong>Referentes Canónicos:</strong> Manuel Castells (2006 - Teoría de la Sociedad Red), Henry Jenkins (2008 - Convergencia Mediática y Narrativas Transmedia), Thomas Davenport & John Beck (2001 - Economía de la Atención y Ecosistemas Digitales).
                    </p>
                    <div style="background:#F0F9FF; border-radius:6px; padding:8px; font-size:0.72rem; color:#0C4A6E;">
                        <strong>Asignaturas Clave:</strong> Comunicación y Ecosistemas Digitales, Diseño UX/UI, Contenidos Multimedia, Storytelling Transmedia, Gestión de la Reputación.
                    </div>
                </div>

                <!-- 3. Analítica y Datos -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #16A34A; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#15803D; margin-bottom:6px;">
                        <i class="fas fa-brain"></i> 3. Analítica, Datos e Inteligencia Artificial
                    </div>
                    <p style="font-size:0.75rem; color:#334155; line-height:1.55; margin-bottom:8px;">
                        <strong>Referentes Canónicos:</strong> Bernard Marr (2016 - Toma de Decisiones Basada en Datos), Foster Provost & Tom Fawcett (2013 - Data Science for Business y Big Data), Luciano Floridi (2013 - Filosofía de la Información, Ética Digital y Ciberseguridad).
                    </p>
                    <div style="background:#F0FDF4; border-radius:6px; padding:8px; font-size:0.72rem; color:#14532D;">
                        <strong>Asignaturas Clave:</strong> Big Data y Analítica de Datos, Analítica Web y Métricas, Ciencia de Datos Aplicada e Inteligencia Artificial.
                    </div>
                </div>

                <!-- 4. Innovación y Emprendimiento -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #7C3AED; border-radius:8px; padding:14px;">
                    <div style="font-weight:800; font-size:0.85rem; color:#6D28D9; margin-bottom:6px;">
                        <i class="fas fa-lightbulb"></i> 4. Innovación, Investigación y Emprendimiento
                    </div>
                    <p style="font-size:0.75rem; color:#334155; line-height:1.55; margin-bottom:8px;">
                        <strong>Referentes Canónicos:</strong> Ikujiro Nonaka & Hirotaka Takeuchi (1995 - Creación del Conocimiento Organizacional), Steve Blank & Eric Ries (Lean Startup y Validación Ágil), Joseph Schumpeter (Innovación y Destrucción Creativa).
                    </p>
                    <div style="background:#FAF5FF; border-radius:6px; padding:8px; font-size:0.72rem; color:#581C87;">
                        <strong>Asignaturas Clave:</strong> Innovación y Emprendimiento Digital, Metodología de la Investigación, Proyecto de Grado, Práctica Profesional.
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. NÚCLEOS PROBLÉMICOS DEL PROGRAMA -->
        <div class="card" style="margin-bottom:20px; border-top:4px solid #16A34A;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-question-circle" style="color:#16A34A; margin-right:8px;"></i> 3. Núcleos Problémicos y Preguntas Orientadoras del Currículo
            </h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#C2410C; margin-bottom:4px;">
                        <i class="fas fa-globe"></i> NP1: Estrategia y Modelos de Negocio
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        ¿Cómo estructurar modelos de negocio en red y estrategias de valor que aseguren la competitividad y rentabilidad en la economía digital?
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#0284C7; margin-bottom:4px;">
                        <i class="fas fa-users"></i> NP2: Ecosistemas y Experiencia de Usuario
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        ¿De qué manera las narrativas transmedia y el diseño UX/UI potencian la interacción significativa entre marcas y usuarios en múltiples plataformas?
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#16A34A; margin-bottom:4px;">
                        <i class="fas fa-chart-pie"></i> NP3: Analítica, MarTech e IA
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        ¿Cómo aplicar la inteligencia de datos y la automatización para optimizar la toma de decisiones, la segmentación y el ROI de las campañas?
                    </p>
                </div>
                <div style="background:#FFF; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                    <div style="font-weight:800; font-size:0.8rem; color:#7C3AED; margin-bottom:4px;">
                        <i class="fas fa-shield-alt"></i> NP4: Ética, Privacidad y Gobernanza
                    </div>
                    <p style="font-size:0.75rem; color:#475569; line-height:1.5; margin:0;">
                        ¿Cómo salvaguardar la privacidad de datos bajo la Ley 1581 de 2012 y garantizar un uso transparente y ético de la inteligencia artificial?
                    </p>
                </div>
            </div>
        </div>
    </div>

<!-- =========================================================
         TAB E: MECANISMOS DE EVALUACIÓN (LITERAL E)
         ========================================================= -->
    <div class="tab-panel" id="c3-evaluacion" style="display:none;">
        <!-- BANNER DE ENCABEZADO NORMATIVO ART. 2.5.3.2.3.2.4 LITERAL E -->
        <div style="background:linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color:#fff; padding:22px 24px; border-radius:10px; margin-bottom:20px; border-left:6px solid #F39200; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#FBBF24; font-weight:800;">
                        <i class="fas fa-clipboard-check"></i> Decreto 1330 de 2019 · Artículo 2.5.3.2.3.2.4 · Literal e)
                    </span>
                    <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; color:#fff; margin-top:4px; margin-bottom:6px;">
                        e) Mecanismos de Evaluación · Sistema Socioformativo y Seguimiento a Resultados de Aprendizaje
                    </h3>
                    <p style="font-size:0.83rem; color:#CBD5E1; margin:0; max-width:850px; line-height:1.5;">
                        <strong>Evaluación integral y formativa:</strong> Articulación de rúbricas analíticas socioformativas, ponderación institucional por cortes (20%, 25%, 55%), evaluación tripartita y trazabilidad tecnopedagógica en LMS Moodle 5.2.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span class="badge-presencial" style="background:#059669; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-chart-pie"></i> Cortes 20% &middot; 25% &middot; 55%
                    </span>
                    <span class="badge-presencial" style="background:#0284C7; color:#fff; font-size:0.76rem; font-weight:800; padding:4px 12px; border-radius:20px;">
                        <i class="fas fa-user-check"></i> Rúbricas Socioformativas (Tobón)
                    </span>
                </div>
            </div>
        </div>

        <!-- 1. SISTEMA INSTITUCIONAL DE EVALUACIÓN Y PONDERACIÓN -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0;">
                    <i class="fas fa-percentage" style="color:var(--orange); margin-right:8px;"></i> 1. Sistema Institucional de Evaluación del Aprendizaje (Socioformativo)
                </h4>
                <span style="font-size:0.75rem; color:#B45309; background:#FEF3C7; padding:3px 10px; border-radius:6px; font-weight:700;">
                    Reglamento Estudiantil &middot; PEI TO
                </span>
            </div>
            <p style="font-size:0.85rem; color:#334155; line-height:1.65; margin-bottom:16px;">
                La evaluación del aprendizaje en la Corporación Escuela Tecnológica del Oriente se asume como un <strong>proceso formativo, continuo, sistemático y transparente</strong> (evaluación para el aprendizaje), cuyo fin principal es verificar el progreso en el alcance de los Resultados de Aprendizaje del Programa (RAP) y retroalimentar oportunamente las oportunidades de mejora de los estudiantes.
            </p>

            <!-- Cortes Evaluativos -->
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-bottom:18px;">
                <!-- Corte 1 -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #0284C7; border-radius:8px; padding:14px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="font-weight:800; font-size:0.85rem; color:#0369A1;">Primer Corte</span>
                        <span style="font-size:0.8rem; font-weight:800; color:#0284C7; background:#E0F2FE; padding:2px 8px; border-radius:4px;">20%</span>
                    </div>
                    <ul style="font-size:0.75rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                        <li><strong>Tareas y Talleres Prácticos:</strong> 15% (actividades de aplicación formativa).</li>
                        <li><strong>Quizzes / Pruebas Cortas:</strong> 5% (comprobación de conceptos).</li>
                    </ul>
                </div>
                <!-- Corte 2 -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #059669; border-radius:8px; padding:14px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="font-weight:800; font-size:0.85rem; color:#047857;">Segundo Corte</span>
                        <span style="font-size:0.8rem; font-weight:800; color:#059669; background:#DCFCE7; padding:2px 8px; border-radius:4px;">25%</span>
                    </div>
                    <ul style="font-size:0.75rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                        <li><strong>Tareas Formativas de Profundización:</strong> 20% (análisis de casos).</li>
                        <li><strong>Quizzes / Controles de Lectura:</strong> 5% (evaluación continua).</li>
                    </ul>
                </div>
                <!-- Corte 3 -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-top:3px solid #F39200; border-radius:8px; padding:14px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="font-weight:800; font-size:0.85rem; color:#C2410C;">Tercer Corte</span>
                        <span style="font-size:0.8rem; font-weight:800; color:#F39200; background:#FFEDD5; padding:2px 8px; border-radius:4px;">55%</span>
                    </div>
                    <ul style="font-size:0.75rem; color:#475569; line-height:1.55; padding-left:16px; margin:0;">
                        <li><strong>Talleres y Casos de Estudio:</strong> 20%</li>
                        <li><strong>Producto Integrador / Proyecto de Aula:</strong> 20%</li>
                        <li><strong>Evaluación Final / Cuestionario Integral:</strong> 15%</li>
                    </ul>
                </div>
            </div>

            <!-- Evaluación Tripartita -->
            <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:8px; padding:14px;">
                <div style="font-weight:800; font-size:0.82rem; color:#6D28D9; margin-bottom:6px;">
                    <i class="fas fa-users-cog"></i> Modelo de Evaluación Tripartita Institucional (PEI TO):
                </div>
                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                    <div style="background:#FFF; border:1px solid #DDD6FE; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#5B21B6;">Autoevaluación (10%):</strong>
                        <p style="font-size:0.72rem; color:#4C1D95; margin:3px 0 0 0; line-height:1.45;">
                            Reflexión metacognitiva sobre el propio desempeño, autorregulación y compromiso formativo.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #DDD6FE; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#5B21B6;">Coevaluación (10%):</strong>
                        <p style="font-size:0.72rem; color:#4C1D95; margin:3px 0 0 0; line-height:1.45;">
                            Valoración constructiva y ética entre pares respecto al trabajo en equipo y los aportes colaborativos.
                        </p>
                    </div>
                    <div style="background:#FFF; border:1px solid #DDD6FE; border-radius:6px; padding:10px;">
                        <strong style="font-size:0.76rem; color:#5B21B6;">Heteroevaluación (80%):</strong>
                        <p style="font-size:0.72rem; color:#4C1D95; margin:3px 0 0 0; line-height:1.45;">
                            Calificación y retroalimentación técnica del docente tutor sustentada en rúbricas analíticas oficiales.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2. RÚBRICAS ANALÍTICAS Y NIVELES DE DESEMPEÑO -->
        <div class="card" style="margin-bottom:22px; border-top:4px solid #0284C7;">
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--dark); margin:0 0 14px 0;">
                <i class="fas fa-table" style="color:#0284C7; margin-right:8px;"></i> 2. Rúbricas Analíticas Socioformativas y los 4 Niveles de Desempeño (Sergio Tobón)
            </h4>
            <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; font-size:0.76rem; color:#334155;">
                    <thead>
                        <tr style="background:#F1F5F9; border-bottom:2px solid #CBD5E1; text-align:left;">
                            <th style="padding:10px; width:18%;">Nivel de Dominio</th>
                            <th style="padding:10px; width:15%;">Ponderación</th>
                            <th style="padding:10px;">Descriptor Socioformativo General</th>
                            <th style="padding:10px; width:35%;">Aplicación Concreta en Marketing Digital</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:#DC2626;">
                                <i class="fas fa-circle" style="font-size:0.6rem; color:#DC2626; margin-right:4px;"></i> Receptivo
                            </td>
                            <td style="padding:10px; font-weight:700; color:#475569;">0.0 - 2.9 (Inicial)</td>
                            <td style="padding:10px; line-height:1.5;">Tiene nociones sobre los conceptos básicos y reconoce la terminología elemental, requiriendo guía permanente.</td>
                            <td style="padding:10px; line-height:1.5; color:#1E293B;">Identifica conceptos básicos de marketing digital, reconoce terminología técnica y describe herramientas de software comercial sin aplicarlas autónomamente.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0; background:#FAFDFB;">
                            <td style="padding:10px; font-weight:800; color:#D97706;">
                                <i class="fas fa-circle" style="font-size:0.6rem; color:#D97706; margin-right:4px;"></i> Resolutivo
                            </td>
                            <td style="padding:10px; font-weight:700; color:#475569;">3.0 - 3.7 (Básico)</td>
                            <td style="padding:10px; line-height:1.5;">Resuelve problemas estructurados y procedimientos operativos aplicando algoritmos y herramientas estándar.</td>
                            <td style="padding:10px; line-height:1.5; color:#1E293B;">Configura campañas operativas en plataformas publicitarias (Google Ads, Meta Ads) y calcula métricas e indicadores de rendimiento estándar (CTR, CPC, CPA).</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:10px; font-weight:800; color:#0284C7;">
                                <i class="fas fa-circle" style="font-size:0.6rem; color:#0284C7; margin-right:4px;"></i> Autónomo
                            </td>
                            <td style="padding:10px; font-weight:700; color:#475569;">3.8 - 4.5 (Avanzado)</td>
                            <td style="padding:10px; line-height:1.5;">Actúa con criterio propio, argumenta con base teórica, soluciona problemas contextuales y evalúa resultados.</td>
                            <td style="padding:10px; line-height:1.5; color:#1E293B;">Diseña planes integrales de mercadeo digital, optimiza presupuestos con analítica avanzada, argumenta propuestas con evidencia y aplica principios éticos de datos.</td>
                        </tr>
                        <tr style="background:#F0FDF4;">
                            <td style="padding:10px; font-weight:800; color:#16A34A;">
                                <i class="fas fa-circle" style="font-size:0.6rem; color:#16A34A; margin-right:4px;"></i> Estratégico
                            </td>
                            <td style="padding:10px; font-weight:700; color:#475569;">4.6 - 5.0 (Sobresaliente)</td>
                            <td style="padding:10px; line-height:1.5;">Genera innovaciones, lidera procesos complejos, aplica el pensamiento sistémico y prospectivo ante la incertidumbre.</td>
                            <td style="padding:10px; line-height:1.5; color:#1E293B;">Lidera procesos de transformación digital, formula modelos de negocio disruptivos, genera soluciones creativas ante contextos de alta incertidumbre y mide el impacto ético.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 3. TRAZABILIDAD Y ALERTAS TEMPRANAS -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
            <!-- LMS Moodle -->
            <div class="card" style="border-top:4px solid #16A34A;">
                <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--dark); margin:0 0 10px 0;">
                    <i class="fas fa-laptop" style="color:#16A34A; margin-right:6px;"></i> 3. Trazabilidad Tecnológica en LMS Moodle 5.2
                </h4>
                <ul style="font-size:0.75rem; color:#475569; line-height:1.6; padding-left:18px; margin:0;">
                    <li><strong>Libro de Calificaciones Ponderado:</strong> Configuración matemática estricta por cortes oficiales (20%, 25%, 55%) visible para el estudiante en tiempo real.</li>
                    <li><strong>Retroalimentación Cualitativa:</strong> Comentarios obligatorios del docente tutor en cada entrega con rúbrica analítica anexa.</li>
                    <li><strong>Control de Originalidad:</strong> Integración de motor antiplagio para verificar la integridad académica en entregables y ensayos.</li>
                    <li><strong>Registro Forense de Actividad:</strong> Logs de acceso, participación en foros y tiempos de dedicación en AWS Cloud.</li>
                </ul>
            </div>

            <!-- SAT -->
            <div class="card" style="border-top:4px solid #EA580C;">
                <h4 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:800; color:var(--dark); margin:0 0 10px 0;">
                    <i class="fas fa-exclamation-triangle" style="color:#EA580C; margin-right:6px;"></i> 4. Sistema de Alertas Tempranas (SAT)
                </h4>
                <ul style="font-size:0.75rem; color:#475569; line-height:1.6; padding-left:18px; margin:0;">
                    <li><strong>Monitoreo de Ingresos:</strong> Alerta automática cuando un estudiante no registra actividad por más de 5 días hábiles en el aula virtual.</li>
                    <li><strong>Acompañamiento Psicosocial:</strong> Intervención oportuna de Bienestar Institucional ante factores de riesgo de deserción.</li>
                    <li><strong>Tutorías de Refuerzo Académico:</strong> Sesiones complementarias programadas para estudiantes con promedios inferiores a 3.0 en primer corte.</li>
                    <li><strong>Comités Curriculares Periódicos:</strong> Evaluación mensual del rendimiento académico por parte de la Escuela de Ingenierías y Ciencias Económicas.</li>
                </ul>
            </div>
        </div>
    </div>

</div>
`;

// =========================================================
// RENDERIZADO DINÁMICO DE LA MALLA Y LA TABLA
// =========================================================
window.renderMktMallaGrid = function() {
    const grid = document.getElementById('mktMallaGrid');
    if (!grid) return;

    let html = '';
    for (let sem = 1; sem <= 8; sem++) {
        const semSubs = window.C3_SUBJECTS.filter(s => s.semestre === sem);
        const semCr = semSubs.reduce((acc, s) => acc + s.creditos, 0);

        html += `
            <div style="background:#F8F9FA; border:1px solid #E5E7EB; border-radius:10px; padding:10px; display:flex; flex-direction:column; gap:8px;">
                <div style="background:#1A1A1B; color:#FFFFFF; padding:8px 10px; border-radius:6px; text-align:center;">
                    <div style="font-size:0.82rem; font-weight:900; letter-spacing:0.5px;">SEMESTRE ${sem}</div>
                    <div style="font-size:0.68rem; color:#F39200; font-weight:700;">6 Asignaturas · ${semCr} Cr</div>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px; flex:1;">
        `;

        semSubs.forEach(s => {
            const visibleArea = (window._mktAreaFilter === 'ALL' || s.area === window._mktAreaFilter);
            const visibleComp = (window._mktCompFilter === 'ALL' || s.componente === window._mktCompFilter);
            const isVisible = visibleArea && visibleComp;

            let borderColor = '#F39200';
            let badgeBg = '#FFF7ED';
            let badgeColor = '#C2410C';
            if (s.area === 'TRANSVERSAL') {
                borderColor = '#1E40AF';
                badgeBg = '#EFF6FF';
                badgeColor = '#1E40AF';
            } else if (s.area === 'ELECTIVA') {
                borderColor = '#16A34A';
                badgeBg = '#ECFDF5';
                badgeColor = '#166534';
            }

            const hText = (window._mktModalityMode === 'virtual') ? '36h TAD · 108h TI' : '48h TAD · 96h TI';

            html += `
                <div class="malla-matrix-subject-card" onclick="selectMatrixSubject('${s.id}')" style="display:${isVisible ? 'flex' : 'none'}; flex-direction:column; justify-content:space-between; background:#FFFFFF; border:1px solid #E5E7EB; border-left:4px solid ${borderColor}; border-radius:8px; padding:10px; cursor:pointer; min-height:115px; box-shadow:0 1px 2px rgba(0,0,0,0.04); transition:all 0.15s ease;" title="Clic para ver Ficha Microcurricular Forense">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                            <span style="font-size:0.65rem; font-weight:800; color:#6B7280;">${s.id}</span>
                            <span style="background:${badgeBg}; color:${badgeColor}; font-size:0.62rem; font-weight:800; padding:1px 5px; border-radius:4px;">${s.area_name}</span>
                        </div>
                        <div style="font-size:0.75rem; font-weight:800; color:#1A1A1B; line-height:1.25; margin-bottom:6px;">
                            ${s.nombre}
                        </div>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.65rem; color:#4B5563; border-top:1px dashed #E5E7EB; padding-top:4px; margin-top:4px;">
                            <span><i class="fas ${s.tipo === 'TP' ? 'fa-tools' : 'fa-chalkboard'}"></i> ${s.tipo} · 3 Cr</span>
                            <span style="font-weight:700; color:#F39200;">${s.bloque}</span>
                        </div>
                        <div style="font-size:0.62rem; color:#6B7280; margin-top:2px;">
                            <i class="fas fa-clock"></i> ${hText}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    }

    grid.innerHTML = html;
    window.renderMktSubjectsTable();
};

window.renderMktSubjectsTable = function() {
    const tbody = document.getElementById('mktSubjectsTableBody');
    if (!tbody) return;

    let html = '';
    window.C3_SUBJECTS.forEach(s => {
        let badgeColor = s.area === 'TRANSVERSAL' ? '#1E40AF' : (s.area === 'ELECTIVA' ? '#166534' : '#C2410C');
        let badgeBg = s.area === 'TRANSVERSAL' ? '#EFF6FF' : (s.area === 'ELECTIVA' ? '#ECFDF5' : '#FFF7ED');

        html += `
            <tr style="border-bottom:1px solid #E5E7EB; cursor:pointer;" onclick="selectMatrixSubject('${s.id}')">
                <td style="padding:7px 10px; font-weight:800; color:#1A1A1B;">Sem ${s.semestre}</td>
                <td style="padding:7px 10px; font-weight:700; color:#6B7280;">${s.id}</td>
                <td style="padding:7px 10px; font-weight:800; color:#1A1A1B;">${s.nombre}</td>
                <td style="padding:7px 10px; text-align:center; font-weight:700;">${s.creditos}</td>
                <td style="padding:7px 10px;"><span style="background:${badgeBg}; color:${badgeColor}; padding:2px 6px; border-radius:4px; font-weight:700; font-size:0.7rem;">${s.area_name}</span></td>
                <td style="padding:7px 10px; color:#4B5563;">${s.componente}</td>
                <td style="padding:7px 10px; text-align:center; font-weight:700;">${s.tipo}</td>
                <td style="padding:7px 10px; color:#6B7280;">${s.bloque}</td>
                <td style="padding:7px 10px; text-align:center;">
                    <button onclick="event.stopPropagation(); openSubjectModal('${s.id}')" style="background:#1A1A1B; color:#FFFFFF; border:none; padding:3px 8px; border-radius:4px; font-size:0.68rem; font-weight:700; cursor:pointer;">
                        <i class="fas fa-eye"></i> Ficha
                    </button>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
};

window.searchMktSubjects = function() {
    const val = (document.getElementById('mktTableSearchInput')?.value || '').toLowerCase();
    const rows = document.querySelectorAll('#mktSubjectsTableBody tr');
    rows.forEach(r => {
        const txt = r.innerText.toLowerCase();
        r.style.display = txt.includes(val) ? '' : 'none';
    });
};

window.filterMktMallaArea = function(area) {
    window._mktAreaFilter = area;
    document.querySelectorAll('.mkt-area-btn').forEach(btn => {
        if (btn.innerText.toUpperCase().includes(area) || (area === 'ALL' && btn.innerText.includes('Todas'))) {
            btn.style.background = '#1A1A1B';
            btn.style.color = '#FFFFFF';
        } else {
            btn.style.background = '#FFFFFF';
            btn.style.color = '#4B5563';
        }
    });
    window.renderMktMallaGrid();
};

window.setMktModalityMode = function(mode) {
    window._mktModalityMode = mode;
    const btnV = document.getElementById('btnMktModVirtual');
    const btnP = document.getElementById('btnMktModPresencial');
    if (mode === 'virtual') {
        if (btnV) { btnV.style.background = '#F39200'; btnV.style.color = '#FFFFFF'; }
        if (btnP) { btnP.style.background = 'transparent'; btnP.style.color = '#4B5563'; }
    } else {
        if (btnP) { btnP.style.background = '#F39200'; btnP.style.color = '#FFFFFF'; }
        if (btnV) { btnV.style.background = 'transparent'; btnV.style.color = '#4B5563'; }
    }
    window.renderMktMallaGrid();
};

// =========================================================
// VENTANA EMERGENTE (MODAL) PARA DESAGREGADO POR ÁREA
// (BENCHMARK OFICIAL ADMINISTRACIÓN DE EMPRESAS)
// =========================================================
window.openAreaModal = function(areaId) {
    let existing = document.getElementById('c3AreaModalOverlay');
    if (existing) existing.remove();

    const cleanId = (areaId || '').toUpperCase();
    const allSubs = window.C3_SUBJECTS || [];

    let areaTitle = '';
    let areaDesc = '';
    let areaColor = '#1E40AF';
    let subList = [];

    if (cleanId === 'ALL') {
        areaTitle = 'Consolidado Global: Plan de Estudios Oficial (144 Créditos · 8 Semestres)';
        areaDesc = 'Estructura curricular completa de Marketing Digital bajo la modalidad de Registro Único (Presencial y Virtual), organizada en 48 asignaturas de 3 créditos cada una, con articulación directa entre competencias del perfil de egreso, Resultados de Aprendizaje del Programa (RAPs) y créditos académicos aprobados por el Consejo Superior mediante Acuerdo No. 03 del 13 de marzo de 2026.';
        areaColor = '#1A1A1B';
        subList = allSubs;
    } else if (cleanId === 'TRANSVERSAL') {
        areaTitle = 'Área de Formación Transversal';
        areaDesc = 'Proporciona la fundamentación matemática, cuantitativa, investigativa, sociohumanística, ética y de segunda lengua (Inglés B1) indispensable para el razonamiento analítico, la comunicación profesional y la comprensión integral del entorno socioeconómico digital.';
        areaColor = '#1E40AF';
        subList = allSubs.filter(s => (s.area || '').toUpperCase() === 'TRANSVERSAL');
    } else if (cleanId === 'DISCIPLINAR') {
        areaTitle = 'Área de Formación Disciplinar';
        areaDesc = 'Constituye el núcleo profesional del Profesional en Marketing Digital, integrando las tecnologías de la información (MarTech), analítica web, Big Data, inteligencia artificial, comercio electrónico, estrategias de contenido, branding digital y performance marketing para liderar organizaciones competitivas en la economía digital.';
        areaColor = '#F39200';
        subList = allSubs.filter(s => (s.area || '').toUpperCase() === 'DISCIPLINAR');
    } else if (cleanId === 'ELECTIVA') {
        areaTitle = 'Área de Formación Electiva';
        areaDesc = 'Brinda flexibilidad curricular y profundización personalizada en tendencias contemporáneas del mercadeo como Growth Marketing, Neuromarketing, E-commerce Avanzado, Computación Espacial y Modelos de Negocio en Red, fortaleciendo la adaptabilidad profesional del egresado.';
        areaColor = '#16A34A';
        subList = allSubs.filter(s => (s.area || '').toUpperCase() === 'ELECTIVA');
    }

    const totalSubs = subList.length;
    const totalCr = subList.reduce((acc, s) => acc + (s.creditos || 0), 0);
    const pctPlan = ((totalCr / 144) * 100).toFixed(2);

    const teoSubs = subList.filter(s => (s.tipo || 'T') === 'T');
    const tpSubs = subList.filter(s => s.tipo === 'TP');
    const teoCr = teoSubs.reduce((acc, s) => acc + s.creditos, 0);
    const tpCr = tpSubs.reduce((acc, s) => acc + s.creditos, 0);
    const teoPct = totalSubs > 0 ? ((teoSubs.length / totalSubs) * 100).toFixed(1) : '0';
    const tpPct = totalSubs > 0 ? ((tpSubs.length / totalSubs) * 100).toFixed(1) : '0';

    const planBadge = '<span style="background:#059669; color:#fff; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-rocket"></i> Propuesta Curricular Aprobada (144 cr · 8 Semestres)</span>';

    const rowsHtml = subList.map(s => {
        const isTP = s.tipo === 'TP';
        const tipoBadge = isTP ?
            '<span style="background:#ECFDF5; color:#047857; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #A7F3D0;"><i class="fas fa-tools"></i> Teórico-Práctica (TP)</span>' :
            '<span style="background:#EFF6FF; color:#1D4ED8; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:4px; border:1px solid #BFDBFE;"><i class="fas fa-chalkboard"></i> Teórica (T)</span>';
        
        return `
            <tr style="border-bottom:1px solid #E2E8F0; cursor:pointer;" onclick="openSubjectModal('${s.id}')" title="Clic para ver ficha microcurricular completa">
                <td style="padding:10px 12px; text-align:center; font-weight:800; color:#0369A1;">S${s.semestre}</td>
                <td style="padding:10px 12px; font-weight:700; color:#1A1A1B;">${s.nombre}</td>
                <td style="padding:10px 12px; text-align:center;">${tipoBadge}</td>
                <td style="padding:10px 12px; text-align:center; font-weight:800; background:#F8FAFC;">${s.creditos} cr</td>
                <td style="padding:10px 12px; text-align:center; color:#0369A1; font-weight:700; font-size:0.78rem;">48h / 96h</td>
                <td style="padding:10px 12px; text-align:center; color:#15803D; font-weight:700; font-size:0.78rem;">36h / 108h</td>
                <td style="padding:10px 12px; color:#64748B; font-size:0.78rem;">${s.prerrequisito}</td>
                <td style="padding:10px 12px; text-align:center;">
                    <button class="viewer-nav-btn next" style="background:#1A1A1B; color:#FFFFFF; border:none; padding:4px 10px; font-size:0.74rem; font-weight:700; border-radius:4px; cursor:pointer;" onclick="event.stopPropagation(); openSubjectModal('${s.id}')">
                        <i class="fas fa-eye"></i> Ver Ficha
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    const modalHtml = `
        <div id="c3AreaModalOverlay" class="subject-modal-overlay" onclick="closeAreaModal(event)" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15,23,42,0.75); backdrop-filter:blur(6px); z-index:100000; display:flex; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;">
            <div class="subject-modal-container" onclick="event.stopPropagation()" style="background:#fff; border-radius:12px; width:100%; max-width:980px; max-height:92vh; display:flex; flex-direction:column; box-shadow:0 25px 50px -12px rgba(0,0,0,0.35); border-top:6px solid ${areaColor}; overflow:hidden;">
                
                <!-- HEADER FIJO -->
                <div style="padding:18px 24px; border-bottom:1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center; background:#F8FAFC;">
                    <div>
                        <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-bottom:6px;">
                            ${planBadge}
                            <span style="background:${areaColor}; color:#fff; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800;"><i class="fas fa-layer-group"></i> Desagregado Oficial</span>
                        </div>
                        <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:#1A1A1B; margin:0;">
                            ${areaTitle}
                        </h3>
                    </div>
                    <button onclick="closeAreaModal()" style="background:#E2E8F0; border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; font-size:1.15rem; color:#475569; display:flex; align-items:center; justify-content:center; transition:background 0.2s; flex-shrink:0;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- CONTENIDO SCROLLEABLE -->
                <div style="padding:24px; overflow-y:auto; flex:1;">

                    <!-- PROPOSITO DEL AREA -->
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid ${areaColor}; padding:14px 16px; border-radius:8px; margin-bottom:18px;">
                        <strong style="color:#1A1A1B; font-size:0.86rem; display:flex; align-items:center; gap:6px;">
                            <i class="fas fa-info-circle" style="color:${areaColor};"></i> Propósito Formativo del Área en el Plan de Estudios:
                        </strong>
                        <p style="font-size:0.83rem; color:#4B5563; margin:6px 0 0 0; line-height:1.5;">${areaDesc}</p>
                    </div>

                    <!-- 4 KPI CARDS DEL AREA INCLUYENDO TEORICAS Y PRACTICAS -->
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:18px;">
                        <div class="card" style="padding:12px; text-align:center; border:1px solid #E5E7EB; border-top:3px solid #1A1A1B; background:#FFFFFF; border-radius:8px;">
                            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B;">${totalSubs}</div>
                            <div style="font-size:0.75rem; font-weight:700; color:#1A1A1B; margin-top:2px;">Asignaturas Totales</div>
                            <div style="font-size:0.7rem; color:#6B7280;">100% del Área</div>
                        </div>

                        <div class="card" style="padding:12px; text-align:center; border:1px solid #E5E7EB; border-top:3px solid ${areaColor}; background:#FFFFFF; border-radius:8px;">
                            <div style="font-size:1.6rem; font-weight:900; color:${areaColor};">${totalCr} cr</div>
                            <div style="font-size:0.75rem; font-weight:700; color:#1A1A1B; margin-top:2px;">Créditos Académicos</div>
                            <div style="font-size:0.7rem; color:#6B7280;">${pctPlan}% del Plan Total</div>
                        </div>

                        <div class="card" style="padding:12px; text-align:center; border:1px solid #BFDBFE; border-top:3px solid #2563EB; background:#EFF6FF; border-radius:8px;">
                            <div style="font-size:1.6rem; font-weight:900; color:#1D4ED8;">${teoSubs.length}</div>
                            <div style="font-size:0.75rem; font-weight:800; color:#1E40AF; margin-top:2px;">Teóricas (T)</div>
                            <div style="font-size:0.72rem; color:#1E3A8A; font-weight:700;">${teoCr} Créditos (${teoPct}%)</div>
                        </div>

                        <div class="card" style="padding:12px; text-align:center; border:1px solid #A7F3D0; border-top:3px solid #059669; background:#ECFDF5; border-radius:8px;">
                            <div style="font-size:1.6rem; font-weight:900; color:#047857;">${tpSubs.length}</div>
                            <div style="font-size:0.75rem; font-weight:800; color:#065F46; margin-top:2px;">Teórico-Prácticas (TP)</div>
                            <div style="font-size:0.72rem; color:#064E3B; font-weight:700;">${tpCr} Créditos (${tpPct}%)</div>
                        </div>
                    </div>

                    <!-- RESUMEN VISUAL DE TEORIA Y PRACTICA -->
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; padding:12px 16px; border-radius:8px; margin-bottom:20px;">
                        <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:800; margin-bottom:6px;">
                            <span style="color:#1D4ED8;"><i class="fas fa-chalkboard"></i> Asignaturas Teóricas: ${teoSubs.length} (${teoCr} cr · ${teoPct}%)</span>
                            <span style="color:#047857;"><i class="fas fa-tools"></i> Asignaturas Teórico-Prácticas: ${tpSubs.length} (${tpCr} cr · ${tpPct}%)</span>
                        </div>
                        <div style="height:10px; width:100%; background:#E2E8F0; border-radius:5px; overflow:hidden; display:flex;">
                            <div style="width:${teoPct}%; background:#2563EB; height:100%;" title="Teóricas: ${teoPct}%"></div>
                            <div style="width:${tpPct}%; background:#059669; height:100%;" title="Teórico-Prácticas: ${tpPct}%"></div>
                        </div>
                        <div style="font-size:0.72rem; color:#64748B; margin-top:6px;">
                            * Las asignaturas teórico-prácticas (TP) vinculan el análisis conceptual con la resolución de casos reales, simuladores de gestión de negocios y talleres aplicados en plataforma y presencialidad.
                        </div>
                    </div>

                    <!-- TABLA DEL DESAGREGADO -->
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:#1A1A1B; margin:0;">
                            <i class="fas fa-list-ul" style="color:${areaColor};"></i> Desagregado de Asignaturas del Área (${totalSubs} Asignaturas · ${totalCr} Créditos)
                        </h4>
                        <span style="font-size:0.74rem; color:#64748B;">Haz clic en cualquier asignatura para abrir su ficha completa</span>
                    </div>

                    <div style="overflow-x:auto;">
                        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; text-align:left;">
                            <thead>
                                <tr style="background:#F8FAFC; border-bottom:2px solid #E2E8F0;">
                                    <th style="padding:8px 10px; width:60px; text-align:center;">Sem</th>
                                    <th style="padding:8px 10px;">Asignatura</th>
                                    <th style="padding:8px 10px; width:160px; text-align:center;">Carácter (T / TP)</th>
                                    <th style="padding:8px 10px; width:80px; text-align:center;">Créditos</th>
                                    <th style="padding:8px 10px; width:140px; text-align:center;">Presencial (1:2)</th>
                                    <th style="padding:8px 10px; width:140px; text-align:center;">Virtual (1:3)</th>
                                    <th style="padding:8px 10px; width:150px;">Prerrequisito</th>
                                    <th style="padding:8px 10px; width:90px; text-align:center;">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rowsHtml}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- FOOTER FIJO -->
                <div style="padding:14px 24px; background:#F8FAFC; border-top:1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:0.75rem; color:#64748B;">
                        <i class="fas fa-shield-alt" style="color:#059669;"></i> Información oficial verificada con los Documentos Maestros [Acuerdo CS 03/2026]
                    </span>
                    <button onclick="closeAreaModal()" style="background:#1A1A1B; color:#fff; border:none; padding:8px 22px; border-radius:6px; font-weight:700; cursor:pointer;">
                        Cerrar Desagregado
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.closeAreaModal = function(e) {
    if (e && e.target && e.target.id !== 'c3AreaModalOverlay' && !e.target.closest('button')) return;
    const modal = document.getElementById('c3AreaModalOverlay');
    if (modal) modal.remove();
};

// =========================================================
// VENTANA EMERGENTE: FICHA MICROCURRICULAR FORENSE
// =========================================================
window.openSubjectModal = function(id, type) {
    const s = (window.C3_SUBJECTS || []).find(item => item.id === id);
    if (!s) return;

    let existing = document.getElementById('c3SubjectModalOverlay');
    if (existing) existing.remove();

    const cr = parseInt(s.creditos) || 3;
    const p_dir = 48;
    const p_ind = 96;
    const p_tot = 144;
    const v_med = 36;
    const v_ind = 108;
    const v_tot = 144;

    const planBadge = '<span style="background:#059669; color:#fff; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-rocket"></i> Propuesta Curricular Aprobada (144 cr · 8 Semestres)</span>';

    const tipoBadge = s.tipo === 'TP' ?
        '<span style="background:#ECFDF5; color:#047857; border:1px solid #A7F3D0; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-tools"></i> Asignatura Teórico-Práctica (TP)</span>' :
        '<span style="background:#EFF6FF; color:#1D4ED8; border:1px solid #BFDBFE; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-chalkboard"></i> Asignatura Teórica (T)</span>';

    const tipoExpl = s.tipo === 'TP' ?
        '<span style="color:#047857; font-weight:600;">Articula la fundamentación conceptual con talleres aplicados, simulación de toma de decisiones en marketing, análisis de casos reales (ABP) y laboratorios prácticos en plataformas MarTech.</span>' :
        '<span style="color:#1D4ED8; font-weight:600;">Enfocada en el rigor conceptual, la modelación analítica y cuantitativa, y la apropiación crítica de teorías organizacionales indispensables para la dirección estratégica.</span>';

    // RAs list
    let rasHtml = '';
    if (s.ras && s.ras.length) {
        rasHtml = s.ras.map((ra, idx) => `
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #059669; padding:8px 12px; border-radius:6px; margin-bottom:6px; font-size:0.8rem; color:#1E293B;">
                <strong style="color:#065F46;"><i class="fas fa-check-circle" style="color:#059669; margin-right:4px;"></i> RA${idx+1}:</strong> ${ra.replace(/^RA\d+:\s*/, '')}
            </div>
        `).join('');
    }

    // Unidades temáticas (20%, 25%, 55%)
    let unitsHtml = '';
    if (s.unidades && s.unidades.length) {
        unitsHtml = s.unidades.map(u => `
            <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-left:4px solid var(--orange, #F39200); border-radius:8px; padding:14px; margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
                    <strong style="color:var(--carbon, #1A1A1B); font-size:0.88rem;">
                        <i class="fas fa-book" style="color:var(--orange, #F39200);"></i> ${u.titulo}
                    </strong>
                    <span style="background:var(--orange, #F39200); color:#fff; font-size:0.72rem; font-weight:800; padding:2px 10px; border-radius:12px;">
                        ${u.fase} · ${u.porcentaje_fase}
                    </span>
                </div>
                <div style="font-size:0.8rem; color:#1E293B; margin-bottom:10px; background:#EFF6FF; padding:8px 12px; border-radius:6px; border-left:3px solid #3B82F6;">
                    <strong><i class="fas fa-bullseye" style="color:#2563EB;"></i> Resultado de Aprendizaje (RA${u.numero}):</strong> ${u.ra}
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    ${(u.actividades || []).map(a => `
                        <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:6px; font-size:0.78rem;">
                            <div style="display:flex; justify-content:space-between; font-weight:800; color:#0F172A; margin-bottom:4px;">
                                <span>${a.nombre}</span>
                                <span style="color:#059669; font-size:0.85rem;">${a.porcentaje}</span>
                            </div>
                            <div style="color:var(--gray-text, #4B5563); font-size:0.74rem; line-height:1.4;">${a.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    const modalHtml = `
        <div id="c3SubjectModalOverlay" class="subject-modal-overlay" onclick="closeSubjectModal(event)" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15,23,42,0.75); backdrop-filter:blur(6px); z-index:100005; display:flex; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;">
            <div class="subject-modal-container" onclick="event.stopPropagation()" style="background:#fff; border-radius:12px; width:100%; max-width:920px; max-height:92vh; display:flex; flex-direction:column; box-shadow:0 25px 50px -12px rgba(0,0,0,0.35); border-top:6px solid var(--orange, #F39200); overflow:hidden;">
                
                <!-- HEADER FIJO -->
                <div style="padding:18px 24px; border-bottom:1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center; background:#F8FAFC;">
                    <div>
                        <div style="display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin-bottom:6px;">
                            ${planBadge}
                            <span style="background:#E0F2FE; color:#0369A1; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800;"><i class="fas fa-graduation-cap"></i> Semestre ${s.semestre}</span>
                            <span class="matrix-area-badge area-${(s.area||'').toLowerCase()}" style="background:#F1F5F9; color:#334155; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800;"><i class="fas fa-layer-group"></i> ${s.area_name || s.area}</span>
                            ${tipoBadge}
                            <span style="background:var(--orange, #F39200); color:#fff; padding:4px 10px; border-radius:6px; font-size:0.74rem; font-weight:800;">${s.creditos} Créditos</span>
                        </div>
                        <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:var(--carbon, #1A1A1B); margin:0;">
                            ${s.nombre}
                        </h3>
                    </div>
                    <button onclick="closeSubjectModal()" style="background:#E2E8F0; border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; font-size:1.15rem; color:#475569; display:flex; align-items:center; justify-content:center; transition:background 0.2s; flex-shrink:0;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- CONTENIDO SCROLLEABLE -->
                <div style="padding:24px; overflow-y:auto; flex:1;">

                    <!-- SECCIÓN: TRAZABILIDAD Y COHERENCIA CON EL PERFIL DE EGRESO -->
                    <div style="background:#F0FDF4; border:1px solid #86EFAC; border-left:5px solid #059669; padding:18px; border-radius:8px; margin-bottom:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
                            <h4 style="margin:0; font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:#065F46; display:flex; align-items:center; gap:8px;">
                                <i class="fas fa-bullseye" style="color:#059669;"></i> Trazabilidad y Coherencia con el Perfil de Egreso
                            </h4>
                            <span style="background:#059669; color:#fff; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:12px;">
                                <i class="fas fa-award"></i> Alineación Decreto 1330
                            </span>
                        </div>

                        <!-- 2 TARJETAS: PERFIL Y RAP -->
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:14px;">
                            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-top:3px solid #2563EB; border-radius:8px; padding:12px;">
                                <div style="font-weight:800; font-size:0.8rem; color:#1E40AF; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                    <i class="fas fa-user-graduate" style="color:#2563EB;"></i> Competencia del Perfil de Egreso:
                                </div>
                                <div style="font-size:0.82rem; color:#0F172A; line-height:1.45; font-weight:600;">
                                    ${s.perfil_asociado}
                                </div>
                                <div style="font-size:0.73rem; color:#64748B; margin-top:6px;">
                                    Aporte clave al liderazgo profesional, ético e innovador del Profesional en Marketing Digital TO.
                                </div>
                            </div>

                            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-top:3px solid #EA580C; border-radius:8px; padding:12px;">
                                <div style="font-weight:800; font-size:0.8rem; color:#9A3412; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                    <i class="fas fa-crosshairs" style="color:#EA580C;"></i> Resultado de Aprendizaje del Programa (RAP):
                                </div>
                                <div style="font-size:0.82rem; color:#0F172A; line-height:1.45; font-weight:600;">
                                    ${s.rap_asociado}
                                </div>
                                <div style="font-size:0.73rem; color:#64748B; margin-top:6px;">
                                    Evidencias evaluativas mediante rúbricas analíticas oficiales (20%, 25%, 55%).
                                </div>
                            </div>
                        </div>

                        <!-- TRIBUTACIÓN DE LOS RAS ESPECÍFICOS -->
                        <div style="margin-top:10px;">
                            <strong style="color:#065F46; font-size:0.82rem; display:block; margin-bottom:6px;">
                                <i class="fas fa-tasks" style="color:#059669;"></i> Resultados de Aprendizaje de la Asignatura (Tributación Directa al RAP):
                            </strong>
                            ${rasHtml}
                        </div>

                        <!-- CARÁCTER FORMATIVO DE LA ASIGNATURA -->
                        <div style="margin-top:10px; background:#FFFFFF; border:1px solid #E2E8F0; padding:10px 12px; border-radius:6px; font-size:0.8rem;">
                            <strong style="color:#0F172A;"><i class="fas fa-info-circle" style="color:var(--orange, #F39200);"></i> Carácter Formativo de la Asignatura:</strong> ${tipoExpl}
                        </div>
                    </div>

                    <!-- DISTRIBUCIÓN DE HORAS SEGÚN DECRETO 1330 -->
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:20px;">
                        <div style="background:#F0F9FF; border:1px solid #BAE6FD; padding:14px; border-radius:8px;">
                            <strong style="color:#0369A1; font-size:0.86rem; display:flex; align-items:center; gap:6px;">
                                <i class="fas fa-university"></i> Modalidad Presencial (Relación 1:2 · Decreto 1330)
                            </strong>
                            <div style="font-size:0.82rem; margin-top:8px; color:#0C4A6E; line-height:1.6;">
                                • Docencia Directa (Acompañamiento en Aula): <strong>${p_dir}h</strong> (16h por crédito)<br>
                                • Trabajo Autónomo e Independiente: <strong>${p_ind}h</strong> (32h por crédito)<br>
                                • Total Horas Semestre: <strong>${p_tot}h</strong> (48h por crédito académico)
                            </div>
                        </div>
                        <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:14px; border-radius:8px;">
                            <strong style="color:#15803D; font-size:0.86rem; display:flex; align-items:center; gap:6px;">
                                <i class="fas fa-laptop"></i> Modalidad Virtual (Relación 1:3 · Mediación en Plataforma LMS)
                            </strong>
                            <div style="font-size:0.82rem; margin-top:8px; color:#14532D; line-height:1.6;">
                                • Acompañamiento Mediado en Plataforma: <strong>${v_med}h</strong> (12h por crédito)<br>
                                • Trabajo Autónomo e Independiente: <strong>${v_ind}h</strong> (36h por crédito)<br>
                                • Total Horas Semestre: <strong>${v_tot}h</strong> (48h por crédito académico)
                            </div>
                        </div>
                    </div>

                    <!-- JUSTIFICACIÓN Y PROPÓSITO FORMATIVO -->
                    <div style="margin-bottom:20px; background:#F8FAFC; border:1px solid #E2E8F0; padding:14px; border-radius:8px;">
                        <strong style="color:var(--carbon, #1A1A1B); font-size:0.85rem;"><i class="fas fa-align-left" style="color:var(--orange, #F39200);"></i> Propósito Formativo y Justificación Académica:</strong>
                        <p style="font-size:0.83rem; color:var(--gray-text, #4B5563); margin:6px 0 0 0; line-height:1.5;">${s.descripcion}</p>
                        <div style="margin-top:10px; font-size:0.82rem; color:var(--carbon, #1A1A1B);">
                            <i class="fas fa-link" style="color:var(--orange, #F39200);"></i> <strong>Prerrequisito:</strong> <span style="font-weight:700;">${s.prerrequisito}</span>
                        </div>
                    </div>

                    <!-- ESTRUCTURA TEMÁTICA Y EVALUACIÓN -->
                    <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:800; color:var(--carbon, #1A1A1B); margin-bottom:12px;">
                        <i class="fas fa-layer-group" style="color:var(--orange, #F39200);"></i> Estructura Pedagógica: 3 Unidades Temáticas, RAs y Actividades (20%, 25%, 55%)
                    </h4>
                    ${unitsHtml}
                </div>

                <!-- FOOTER FIJO -->
                <div style="padding:14px 24px; background:#F8FAFC; border-top:1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:0.75rem; color:#64748B;">
                        <i class="fas fa-check-double" style="color:#059669;"></i> Corporación Escuela Tecnológica del Oriente · Registro Calificado Nuevo
                    </span>
                    <button onclick="closeSubjectModal()" style="background:var(--carbon, #1A1A1B); color:#fff; border:none; padding:8px 22px; border-radius:6px; font-weight:700; cursor:pointer;">
                        Cerrar Ficha
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.closeSubjectModal = function(e) {
    if (e && e.target && e.target.id !== 'c3SubjectModalOverlay' && !e.target.closest('button')) return;
    const modal = document.getElementById('c3SubjectModalOverlay');
    if (modal) modal.remove();
};

window.selectMatrixSubject = function(id, type) {
    window.openSubjectModal(id, type);
};

window.openMktSubjectModal = window.openSubjectModal;

window.c3Init = function() {
    if (typeof window.renderMktMallaGrid === 'function') {
        window.renderMktMallaGrid();
    }
};

// Inicialización automática al cargar sección C3
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (typeof window.renderMktMallaGrid === 'function') {
            window.renderMktMallaGrid();
        }
    }, 200);
});
