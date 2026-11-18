/* =========================================================
   CONDICIÓN 4 – ORGANIZACIÓN DE ACTIVIDADES ACADÉMICAS Y PROCESO FORMATIVO
   Marketing Digital · Registro Calificado Nuevo · Registro Único (Presencial & Virtual) · TO
   Fuentes Oficiales: Documento Maestro Cap. 4 (Tabla 40) y Respuesta a Completitud Obs. 3 (Tablas 2 y 3)
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c4'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 4 · Programa Nuevo
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Decreto 1330 de 2019 · Respuesta a Completitud Observación 3 · Tabla 40 DM</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.25rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-cogs" style="color:#F39200;"></i> Organización de Actividades Académicas y Proceso Formativo
            </h4>
            <p style="color:#D1D1D1; font-size:0.85rem; margin:0; line-height:1.45;">
                Distribución de los <strong>144 créditos académicos (6.912 horas)</strong> en modalidades Presencial (1:2) y Virtual (1:3), diseño instruccional <strong>ADDIE</strong>, matriz de virtualización en LMS Moodle (<strong>18 asignaturas 100% virtualizadas + cronograma de 7 fases</strong>), credenciales oficiales de acceso para la Sala CONACES y sistema de evaluación socioformativa (Tabla 40).
            </p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:800; padding:6px 14px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-key"></i> Usuario Moodle Sala: marketing · Clave: Marketing2025*
            </span>
        </div>
    </div>
</div>

<!-- BARRA DE SUBPESTAÑAS CONDICIÓN 4 -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:10px 14px; margin-bottom:20px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.75rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-compass" style="color:#F39200;"></i> Ejes de Actividades Académicas:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;" id="c4-subtabs-bar">
        <button onclick="window.showC4Section('c4-creditos-modalidad')" data-c4-target="c4-creditos-modalidad" class="c4-subtab-btn" style="background:#1A1A1B; color:#FFFFFF; border:1.5px solid #F39200; padding:7px 13px; border-radius:8px; font-size:0.74rem; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; gap:6px; box-shadow:0 2px 8px rgba(243,146,0,0.25);">
            <i class="fas fa-clock" style="color:#F39200;"></i> 1. Créditos por Modalidad y Bloques (8 Sem.)
        </button>
        <button onclick="window.showC4Section('c4-virtualizacion-moodle')" data-c4-target="c4-virtualizacion-moodle" class="c4-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:7px 13px; border-radius:8px; font-size:0.74rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
            <i class="fas fa-laptop-code" style="color:#F39200;"></i> 2. Virtualización Moodle, ADDIE &amp; Credenciales Sala
        </button>
        <button onclick="window.showC4Section('c4-metodologias-evaluacion')" data-c4-target="c4-metodologias-evaluacion" class="c4-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:7px 13px; border-radius:8px; font-size:0.74rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
            <i class="fas fa-tasks" style="color:#F39200;"></i> 3. Metodologías Activas y Evaluación (Tabla 40)
        </button>
        <button onclick="window.showC4Section('c4-interaccion-permanencia')" data-c4-target="c4-interaccion-permanencia" class="c4-subtab-btn" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; padding:7px 13px; border-radius:8px; font-size:0.74rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
            <i class="fas fa-users-cog" style="color:#F39200;"></i> 4. Relación 1:23, Interacción Sincrónica &amp; SAT
        </button>
    </div>
</div>

<!-- ========================================================================= -->
<!-- SUBSECCIÓN 1: SISTEMA DE CRÉDITOS POR MODALIDAD Y BLOQUES DE 8 SEMANAS    -->
<!-- ========================================================================= -->
<div id="c4-creditos-modalidad" class="c4-sub-panel" style="display:block;">
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #F39200; border-radius:12px; padding:22px; margin-bottom:20px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
        <div style="margin-bottom:16px; border-bottom:1px solid #F1F5F9; padding-bottom:10px;">
            <span style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:#C2410C;">Artículo 2.5.3.2.4.1 Decreto 1075 de 2015 / Decreto 1330 de 2019 · Tablas 14 a 33 DM</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.14rem; font-weight:800; color:#1A1A1B; margin:2px 0 0;">
                Arquitectura de Créditos Académicos (1 Crédito = 48 Horas) en Registro Único (Presencial y Virtual)
            </h4>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(380px, 1fr)); gap:18px; margin-bottom:20px;">
            <div style="background:#FFF7ED; border:1.5px solid #FED7AA; border-top:5px solid #F39200; border-radius:10px; padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="background:#F39200; color:#FFFFFF; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:12px;">MODALIDAD VIRTUAL · RELACIÓN 1:3</span>
                    <span style="font-size:0.76rem; font-weight:800; color:#9A3412;">Tablas 14 a 24 DM</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.96rem; font-weight:800; color:#1A1A1B; margin:0 0 8px;">
                    12 Horas HTAD + 36 Horas HTI por Crédito Académico (48 h)
                </h5>
                <p style="font-size:0.77rem; color:#334155; line-height:1.45; margin:0 0 12px;">
                    En cada asignatura de <strong>3 créditos académicos (144 horas totales)</strong> en modalidad virtual, el estudiante desarrolla:
                </p>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; font-size:0.76rem;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span><strong>Horas de Acompañamiento Docente (HTAD - 25%):</strong> Sincrónicas (Microsoft Teams) + Asincrónicas (Foros, tutoría LMS)</span>
                        <strong style="color:#C2410C;">36 h / asig · 1.728 h programa</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; border-top:1px dashed #FED7AA; padding-top:6px;">
                        <span><strong>Horas de Trabajo Independiente (HTI - 75%):</strong> Recursos Educativos Digitales (OVA) + Autónomo + Colaborativo</span>
                        <strong style="color:#1A1A1B;">108 h / asig · 5.184 h programa</strong>
                    </div>
                </div>
            </div>

            <div style="background:#FFF1F2; border:1.5px solid #FECDD3; border-top:5px solid #C8102E; border-radius:10px; padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="background:#C8102E; color:#FFFFFF; font-size:0.72rem; font-weight:800; padding:3px 10px; border-radius:12px;">MODALIDAD PRESENCIAL · RELACIÓN 1:2</span>
                    <span style="font-size:0.76rem; font-weight:800; color:#9F1239;">Sede Bucaramanga · Anexo 11</span>
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.96rem; font-weight:800; color:#1A1A1B; margin:0 0 8px;">
                    16 Horas HTAD + 32 Horas HTI por Crédito Académico (48 h)
                </h5>
                <p style="font-size:0.77rem; color:#334155; line-height:1.45; margin:0 0 12px;">
                    En cada asignatura de <strong>3 créditos académicos (144 horas totales)</strong> en modalidad presencial, el estudiante desarrolla:
                </p>
                <div style="background:#FFFFFF; border:1px solid #FECDD3; border-radius:8px; padding:12px; font-size:0.76rem;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span><strong>Horas de Docencia Directa en Aula/Laboratorio (HTAD - 33,3%):</strong> Talleres presenciales, laboratorios y estudio de casos</span>
                        <strong style="color:#9F1239;">48 h / asig · 2.304 h programa</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; border-top:1px dashed #FECDD3; padding-top:6px;">
                        <span><strong>Horas de Trabajo Independiente (HTI - 66,7%):</strong> Investigación, proyectos aplicados, lecturas y aula extendida</span>
                        <strong style="color:#1A1A1B;">96 h / asig · 4.608 h programa</strong>
                    </div>
                </div>
            </div>
        </div>

        <!-- ORGANIZACIÓN MODULAR POR BLOQUES DE 8 SEMANAS (TABLAS 26 A 33 DM) -->
        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 10px;">
                <i class="fas fa-calendar-alt" style="color:#F39200; margin-right:6px;"></i> Operación Modular por Bloques de 8 Semanas dentro de cada Semestre de 16 Semanas (Tablas No. 26 a 33 DM)
            </h5>
            <p style="font-size:0.77rem; color:#334155; line-height:1.5; margin:0 0 12px;">
                Para evitar la dispersión cognitiva de cursar 6 asignaturas simultáneas y maximizar las tasas de aprobación y permanencia, cada semestre de 16 semanas (18 créditos = 6 asignaturas) se organiza en <strong>dos bloques consecutivos de 8 semanas</strong>:
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-left:4px solid #F39200; border-radius:8px; padding:12px; font-size:0.76rem;">
                    <strong style="color:#9A3412; display:block; margin-bottom:4px;">Primer Bloque Modular (Semanas 1 a 8)</strong>
                    El estudiante cursa <strong>3 asignaturas (9 créditos = 432 horas totales)</strong>, concentrando su atención en 3 espacios académicos con acompañamiento intensivo y evaluación continua.
                </div>
                <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:4px solid #1A1A1B; border-radius:8px; padding:12px; font-size:0.76rem;">
                    <strong style="color:#1A1A1B; display:block; margin-bottom:4px;">Segundo Bloque Modular (Semanas 9 a 16)</strong>
                    El estudiante cursa las siguientes <strong>3 asignaturas del semestre (9 créditos = 432 horas totales)</strong>, completando las 6 asignaturas (18 créditos = 864 horas) del período.
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-left:4px solid #16A34A; border-radius:8px; padding:12px; font-size:0.76rem;">
                    <strong style="color:#15803D; display:block; margin-bottom:4px;">Balance Teórico-Práctico del Plan (48 Asignaturas)</strong>
                    <strong>28 Asignaturas Teórico-Prácticas (TP = 84 créditos / 58,3%)</strong> y <strong>20 Asignaturas Teóricas (T = 60 créditos / 41,7%)</strong>, garantizando el aprender haciendo.
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- SUBSECCIÓN 2: ESTADO Y CRONOGRAMA DE VIRTUALIZACIÓN + CREDENCIALES SALA   -->
<!-- ========================================================================= -->
<div id="c4-virtualizacion-moodle" class="c4-sub-panel" style="display:none;">
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #16A34A; border-radius:12px; padding:22px; margin-bottom:20px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px; border-bottom:1px solid #F1F5F9; padding-bottom:10px;">
            <div>
                <span style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:#15803D;">Respuesta Institucional a Completitud Observación 3 (Tablas 2 y 3) · Anexo 20</span>
                <h4 style="font-family:'Montserrat',sans-serif; font-size:1.14rem; font-weight:800; color:#1A1A1B; margin:2px 0 0;">
                    Estado de Virtualización en LMS Moodle, Cronograma Progresivo ADDIE y Credenciales para la Sala CONACES
                </h4>
            </div>
            <a href="assets/docs/Anexo_20_Lineamiento_Virtualizacion_Recursos.pdf" target="_blank" style="background:#F0FDF4; color:#15803D; border:1px solid #BBF7D0; text-decoration:none; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px;">
                <i class="fas fa-file-pdf"></i> Anexo 20: Lineamiento de Virtualización
            </a>
        </div>

        <!-- TARJETA DESTACADA DE CREDENCIALES OFICIALES PARA VERIFICACIÓN DE LA SALA CONACES -->
        <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:12px; padding:18px 22px; margin-bottom:20px; border-left:6px solid #F39200; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div>
                <div style="font-size:0.72rem; font-weight:800; color:#F39200; text-transform:uppercase; margin-bottom:4px;">
                    <i class="fas fa-shield-alt"></i> Acceso Directo de Verificación para Pares Académicos y Sala CONACES (Respuesta Completitud Obs. 3)
                </div>
                <h5 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; margin:0 0 4px; color:#FFFFFF;">
                    Campus Virtual Institucional Moodle · Programa de Marketing Digital
                </h5>
                <p style="font-size:0.78rem; color:#D1D5DB; margin:0;">
                    Credenciales habilitadas con permisos de consulta sobre las aulas virtuales, OVA HTML5, videos, podcast, guías didácticas, rúbricas y actividades interactivas:
                </p>
            </div>
            <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
                <div style="background:rgba(255,255,255,0.1); border:1px solid rgba(243,146,0,0.5); border-radius:8px; padding:10px 16px;">
                    <div style="font-size:0.65rem; color:#F39200; font-weight:800; text-transform:uppercase;">Usuario Oficial</div>
                    <div style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:900; color:#FFFFFF;">marketing</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); border:1px solid rgba(243,146,0,0.5); border-radius:8px; padding:10px 16px;">
                    <div style="font-size:0.65rem; color:#F39200; font-weight:800; text-transform:uppercase;">Contraseña Oficial</div>
                    <div style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:900; color:#FFFFFF;">Marketing2025*</div>
                </div>
                <a href="https://campusvirtual.tecnologicadeloriente.edu.co" target="_blank" style="background:#F39200; color:#FFFFFF; text-decoration:none; font-size:0.78rem; font-weight:800; padding:12px 16px; border-radius:8px; display:inline-flex; align-items:center; gap:6px;">
                    <i class="fas fa-external-link-alt"></i> Ingresar al Campus Virtual
                </a>
            </div>
        </div>

        <!-- RESUMEN DE AVANCE DE VIRTUALIZACIÓN Y TABLA 3 DE COMPLETITUD (CRONOGRAMA 7 FASES) -->
        <div style="display:grid; grid-template-columns:1fr 1.25fr; gap:18px;">
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0 0 10px;">
                    <i class="fas fa-check-double" style="color:#16A34A; margin-right:6px;"></i> Balance de Virtualización en LMS Moodle (Tabla 2 Completitud)
                </h5>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:12px; text-align:center;">
                        <div style="font-size:1.6rem; font-weight:900; color:#16A34A; font-family:'Montserrat',sans-serif;">18 Aulas</div>
                        <div style="font-size:0.72rem; font-weight:800; color:#15803D;">100% Virtualizadas en Moodle</div>
                        <div style="font-size:0.68rem; color:#475569;">54 Créditos (37,5% de la malla)</div>
                    </div>
                    <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:8px; padding:12px; text-align:center;">
                        <div style="font-size:1.6rem; font-weight:900; color:#F39200; font-family:'Montserrat',sans-serif;">30 Aulas</div>
                        <div style="font-size:0.72rem; font-weight:800; color:#C2410C;">Cronograma ADDIE (Fases 1-7)</div>
                        <div style="font-size:0.68rem; color:#475569;">90 Créditos (62,5% de la malla)</div>
                    </div>
                </div>
                <p style="font-size:0.75rem; color:#334155; line-height:1.45; margin:0 0 10px;">
                    <strong>18 Asignaturas ya Virtualizadas al 100% en Moodle:</strong><br>
                    • <strong>Sem. I (5 de 6):</strong> <em>Cátedra de la Paz, Fundamentos de Marketing Digital, Fundamentos Contables, Competencias Digitales, Fundamentos de Administración</em>.<br>
                    • <strong>Sem. II (4 de 6):</strong> <em>Bioética, Fundamentos de Publicidad y Medios Digitales, Diseño UX/UI, Costos y Presupuestos</em>.<br>
                    • <strong>Sem. III a VIII (9 transversales e investigativas):</strong> <em>Big Data y Analítica, Emprendimiento, Inteligencia Artificial, Inglés I, II y III, Pensamiento Estratégico, Electivas I, II y III, Investigación e Innovación I y II</em>.
                </p>
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px; font-size:0.73rem; color:#334155;">
                    <strong style="color:#1A1A1B;">18 Recursos Estándar por Aula Virtual (Modelo ADDIE):</strong> Video de presentación, video motion, podcast, infografías interactivas, OVA HTML5 (acordeones, sliders, flip cards, líneas de tiempo), guía didáctica, syllabus, glosario, cuestionarios, evidencias con rúbrica, foros, bibliografía e-Libro y síntesis.
                </div>
            </div>

            <div style="border:1px solid #E2E8F0; border-radius:10px; overflow:hidden;">
                <div style="background:#1A1A1B; color:#FFFFFF; padding:10px 14px; font-family:'Montserrat',sans-serif; font-size:0.82rem; font-weight:800;">
                    <i class="fas fa-calendar-check" style="color:#F39200; margin-right:6px;"></i> Tabla 3 de Completitud: Cronograma General de Virtualización Anticipada (Modelo ADDIE)
                </div>
                <table class="tbl" style="width:100%; font-size:0.75rem; margin:0;">
                    <thead style="background:#F8FAFC;">
                        <tr>
                            <th>Fase</th>
                            <th>Período de Ejecución</th>
                            <th>Actividad de Producción Instruccional ADDIE</th>
                            <th>Resultado Verificable en LMS Moodle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:#F0FDF4;">
                            <td style="font-weight:800; color:#15803D;">Base</td>
                            <td>Antes del inicio Cohorte 1</td>
                            <td>Alistamiento total de Semestre I (5 aulas ya 100% listas + Matemática) y 13 aulas transversales/electivas.</td>
                            <td>100% de Semestre I disponible antes del ingreso de la primera cohorte.</td>
                        </tr>
                        <tr>
                            <td style="font-weight:800; color:#C2410C;">Fase 1</td>
                            <td>Durante el 1er período académico</td>
                            <td>Desarrollo y validación de las 2 aulas restantes de Semestre II (<em>Comunicación y Ecosistemas Digitales, Estrategia y Branding</em>).</td>
                            <td>100% de asignaturas de Semestre II disponibles antes de su inicio.</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="font-weight:800;">Fase 2</td>
                            <td>Durante el 2º período académico</td>
                            <td>Desarrollo y validación de las 4 aulas disciplinares de Semestre III (<em>Marketing de Contenidos, Social Media, Multimedia, Storytelling</em>).</td>
                            <td>100% de asignaturas de Semestre III disponibles antes de su inicio.</td>
                        </tr>
                        <tr>
                            <td style="font-weight:800;">Fase 3</td>
                            <td>Durante el 3er período académico</td>
                            <td>Desarrollo y validación de las 4 aulas disciplinares de Semestre IV (<em>Analítica Web, Automatización y CRM, Estrategias, E-commerce</em>).</td>
                            <td>100% de asignaturas de Semestre IV disponibles antes de su inicio.</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="font-weight:800;">Fase 4</td>
                            <td>Durante el 4º período académico</td>
                            <td>Desarrollo y validación de las 3 aulas disciplinares de Semestre V (<em>Neuromarketing, Reputación y Crisis, Ciberseguridad y Ética</em>).</td>
                            <td>100% de asignaturas de Semestre V disponibles antes de su inicio.</td>
                        </tr>
                        <tr>
                            <td style="font-weight:800;">Fase 5</td>
                            <td>Durante el 5º período académico</td>
                            <td>Desarrollo y validación de las 4 aulas disciplinares de Semestre VI (<em>Proyectos Digitales, Startups, Ciencia de Datos, Gestión Financiera</em>).</td>
                            <td>100% de asignaturas de Semestre VI disponibles antes de su inicio.</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="font-weight:800;">Fase 6</td>
                            <td>Durante el 6º período académico</td>
                            <td>Desarrollo y validación de las 4 aulas disciplinares de Semestre VII (<em>Campañas Integradas, Planeación Digital, Contenidos con IA, CX</em>).</td>
                            <td>100% de asignaturas de Semestre VII disponibles antes de su inicio.</td>
                        </tr>
                        <tr>
                            <td style="font-weight:800; color:#15803D;">Fase 7</td>
                            <td>Durante el 7º período académico</td>
                            <td>Desarrollo y validación de las 5 aulas disciplinares de Semestre VIII (<em>Performance, Monetización, Marca Personal, Tendencias, Portafolio</em>).</td>
                            <td><strong>Totalidad de las 48 asignaturas (144 cr) virtualizadas al 100%</strong>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- SUBSECCIÓN 3: METODOLOGÍAS ACTIVAS Y SISTEMA DE EVALUACIÓN (TABLA 40 DM)  -->
<!-- ========================================================================= -->
<div id="c4-metodologias-evaluacion" class="c4-sub-panel" style="display:none;">
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #EA580C; border-radius:12px; padding:22px; margin-bottom:20px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
        <div style="margin-bottom:16px; border-bottom:1px solid #F1F5F9; padding-bottom:10px;">
            <span style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:#EA580C;">Tabla No. 40 del Documento Maestro · Anexo 11 Syllabus</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.14rem; font-weight:800; color:#1A1A1B; margin:2px 0 0;">
                Metodologías Activas de Aprendizaje y Sistema de Evaluación Socioformativa por Evidencias
            </h4>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-bottom:18px;">
            <div style="background:#FFF7ED; border:1px solid #FED7AA; border-left:4px solid #F39200; border-radius:8px; padding:14px;">
                <strong style="color:#9A3412; font-size:0.84rem; display:block; margin-bottom:4px;"><i class="fas fa-diagnoses"></i> 1. Evaluación Diagnóstica (Inicio)</strong>
                <p style="font-size:0.75rem; color:#334155; margin:0; line-height:1.45;">Cuestionario de presaberes y caracterización al iniciar cada bloque modular de 8 semanas para calibrar las secuencias didácticas y activar alertas tempranas.</p>
            </div>
            <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-left:4px solid #1A1A1B; border-radius:8px; padding:14px;">
                <strong style="color:#1A1A1B; font-size:0.84rem; display:block; margin-bottom:4px;"><i class="fas fa-chart-pie"></i> 2. Evaluación Sumativa (2 Cortes · 50% / 50%)</strong>
                <p style="font-size:0.75rem; color:#334155; margin:0; line-height:1.45;"><strong>Primer Corte (50%):</strong> Examen/Proyecto parcial (30%) + Trabajo en aula (10%) + Trabajo autónomo (10%).<br><strong>Segundo Corte (50%):</strong> Proyecto/Examen final (30%) + Trabajo en aula (10%) + Trabajo autónomo (10%).</p>
            </div>
            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-left:4px solid #16A34A; border-radius:8px; padding:14px;">
                <strong style="color:#15803D; font-size:0.84rem; display:block; margin-bottom:4px;"><i class="fas fa-sync"></i> 3. Evaluación Formativa Tripartita</strong>
                <p style="font-size:0.75rem; color:#334155; margin:0; line-height:1.45;">Articula <strong>Autoevaluación</strong> (autorregulación metacognitiva), <strong>Coevaluación</strong> (trabajo colaborativo entre pares) y <strong>Heteroevaluación</strong> mediante rúbricas analíticas en Moodle.</p>
            </div>
        </div>

        <!-- RESUMEN POR INSTRUMENTOS DE LA TABLA 40 DEL DOCUMENTO MAESTRO -->
        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0 0 10px;">
                <i class="fas fa-tools" style="color:#F39200; margin-right:6px;"></i> Ecosistema de Instrumentos y Herramientas Evaluativas de las 48 Asignaturas (Tabla No. 40 del Documento Maestro)
            </h5>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; font-size:0.75rem;">
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                    <strong style="color:#C2410C; display:block; margin-bottom:3px;">Prototipado UX/UI y Multimedia</strong>
                    Prototipos funcionales en <strong>Figma</strong>, piezas en <strong>Adobe Creative Cloud</strong>, mapas de ecosistema y dossiers de narrativa transmedia.
                </div>
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                    <strong style="color:#1A1A1B; display:block; margin-bottom:3px;">Analítica Web, Big Data y Ciencia de Datos</strong>
                    Dashboards en vivo en <strong>Google Analytics 4 (GA4)</strong>, <strong>Looker Studio</strong>, <strong>Power BI</strong> y modelos predictivos en Python.
                </div>
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                    <strong style="color:#15803D; display:block; margin-bottom:3px;">CRM, E-Commerce y Paid Media</strong>
                    Flujos automatizados en <strong>HubSpot CRM</strong>, tiendas funcionales en <strong>Shopify/WooCommerce</strong> y campañas en <strong>Google/Meta Ads</strong>.
                </div>
                <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                    <strong style="color:#9F1239; display:block; margin-bottom:3px;">Estrategia, Startups y Capstone</strong>
                    Planes SOSTAC/RACE, simulaciones de crisis, <strong>Pitch Deck</strong> de startups, anteproyecto/proyecto final y <strong>Portafolio Profesional Digital</strong>.
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ========================================================================= -->
<!-- SUBSECCIÓN 4: RELACIÓN 1:23, INTERACCIÓN SINCRÓNICA Y PERMANENCIA (SAT)   -->
<!-- ========================================================================= -->
<div id="c4-interaccion-permanencia" class="c4-sub-panel" style="display:none;">
    <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-top:5px solid #1A1A1B; border-radius:12px; padding:22px; margin-bottom:20px; box-shadow:0 4px 16px rgba(0,0,0,0.05);">
        <div style="margin-bottom:16px; border-bottom:1px solid #F1F5F9; padding-bottom:10px;">
            <span style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:#C2410C;">Dimensión Comunicativa y Organizacional del Documento Maestro · Bienestar y SAT</span>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.14rem; font-weight:800; color:#1A1A1B; margin:2px 0 0;">
                Lineamientos de Encuentros Sincrónicos, Propiedad Intelectual, Netiqueta y Acompañamiento Estudiantil
            </h4>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:16px;">
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0 0 10px;">
                    <i class="fas fa-video" style="color:#F39200; margin-right:6px;"></i> 8 Lineamientos Oficiales para Encuentros Sincrónicos (Microsoft Teams)
                </h5>
                <ul style="margin:0; padding-left:18px; font-size:0.75rem; color:#334155; line-height:1.5;">
                    <li><strong>1. Planificación previa:</strong> Agenda estructurada por el docente con objetivos, temas y materiales previos en Moodle.</li>
                    <li><strong>2. Uso de tecnología oficial:</strong> Sesiones en <strong>Microsoft Teams</strong> integradas al calendario institucional Microsoft 365.</li>
                    <li><strong>3. Promoción de interacción:</strong> Debates, encuestas en vivo, pizarras digitales y salas de trabajo colaborativo.</li>
                    <li><strong>4. Grabación 100% alojada en LMS:</strong> Todas las sesiones sincrónicas quedan grabadas y publicadas en el aula virtual Moodle para consulta asíncrona.</li>
                    <li><strong>5. Inclusión y accesibilidad:</strong> Subtítulos automáticos, transcripciones y ajustes razonables.</li>
                    <li><strong>6. Propiedad intelectual y Netiqueta:</strong> Cesión patrimonial de expertos, normas APA 7ª ed., software antiplagio, licencias Creative Commons y las 10 reglas de Netiqueta de Virginia Shea.</li>
                </ul>
            </div>

            <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:10px; padding:16px;">
                <h5 style="font-family:'Montserrat',sans-serif; font-size:0.9rem; font-weight:800; color:#9A3412; margin:0 0 10px;">
                    <i class="fas fa-user-shield" style="color:#F39200; margin-right:6px;"></i> Acompañamiento Docente, Tutorías y Sistema de Alertas Tempranas (SAT)
                </h5>
                <ul style="margin:0; padding-left:18px; font-size:0.75rem; color:#334155; line-height:1.5;">
                    <li><strong>Grupos personalizados 1:23:</strong> Máximo 23 estudiantes por aula presencial o sección virtual en Moodle, garantizando seguimiento individualizado.</li>
                    <li><strong>Horas de Tutoría y Bienestar en Planes de Trabajo Docente (Tabla 57 DM):</strong> Los docentes de Tiempo Completo (40 h/sem) y Medio Tiempo (20 h/sem) tienen horas asignadas expresamente a tutorías académicas, bienestar y permanencia.</li>
                    <li><strong>Monitoreo Analítico en LMS Moodle y SIGA:</strong> Detección temprana de inasistencia o inactividad superior a 7 días en plataforma, activando intervención psicopedagógica, nivelación en matemática/competencias digitales y apoyo financiero.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

window.showC4Section = function(targetId) {
    const panels = ['c4-creditos-modalidad', 'c4-virtualizacion-moodle', 'c4-metodologias-evaluacion', 'c4-interaccion-permanencia'];
    panels.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === targetId) ? 'block' : 'none';
    });
    const bar = document.getElementById('c4-subtabs-bar');
    if (bar) {
        bar.querySelectorAll('.c4-subtab-btn').forEach(btn => {
            const isTarget = btn.getAttribute('data-c4-target') === targetId;
            if (isTarget) {
                btn.style.background = '#1A1A1B';
                btn.style.color = '#FFFFFF';
                btn.style.border = '1.5px solid #F39200';
                btn.style.fontWeight = '800';
                btn.style.boxShadow = '0 2px 8px rgba(243,146,0,0.25)';
            } else {
                btn.style.background = '#F8FAFC';
                btn.style.color = '#334155';
                btn.style.border = '1px solid #CBD5E1';
                btn.style.fontWeight = '700';
                btn.style.boxShadow = 'none';
            }
        });
    }
};

window.c4Init = function() {
    window.showC4Section('c4-creditos-modalidad');
};
