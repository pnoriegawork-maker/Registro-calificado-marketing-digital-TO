/* =========================================================
   CONDICIÓN 7 – PERSONAL DOCENTE Y PLAN DE VINCULACIÓN
   Marketing Digital · Registro Calificado Nuevo · Registro Único (Presencial & Virtual) · TO
   Fuentes Oficiales: Documento Maestro Cap. 7 (Tablas 57 a 67), Respuesta a Completitud Obs. 4 (Tablas 5 y 6),
   Anexo 17 (Estatuto Docente - Acuerdo CS 011), Anexo 18 (Planes de Trabajo) y Anexo 19 (Hojas de Vida Docentes)
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c7'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 7 · Programa Nuevo
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Decreto 1330 de 2019 · Planta Docente Integral, Dedicación y Desarrollo Profesoral</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.26rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-chalkboard-teacher" style="color:#F39200;"></i> Personal Docente y Desarrollo Profesoral
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0; line-height:1.45;">
                Cuerpo profesoral de excelencia asignado a las modalidades <strong>Presencial y Virtual</strong>: 100% con formación posgradual, asignación balanceada de <strong>20 h semanales para Medio Tiempo</strong> y <strong>40 h semanales para Tiempo Completo</strong>, modelo 50/15/10/10/15 con <strong>13 h de feedback virtual semanal</strong>, proyección a 23 docentes y modelo de evaluación 360°.
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-graduation-cap"></i> 100% Posgrado
            </span>
            <span style="background:rgba(34,197,94,0.22); color:#4ADE80; border:1px solid #22c55e; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-clock"></i> MT: 20 h / TC: 40 h
            </span>
            <span style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                Ratio 1:23 a 1:35
            </span>
            <a href="assets/docs/Anexo_17_Estatuto_Docente.pdf" target="_blank" style="background:rgba(243,146,0,0.15); color:#F39200; border:1px solid #F39200; text-decoration:none; font-weight:700; padding:5px 10px; border-radius:20px; font-size:0.74rem;">
                <i class="fas fa-file-pdf"></i> Estatuto Docente
            </a>
        </div>
    </div>
</div>

<!-- BARRA DE SUBSECCIONES EN PRIMER PLANO -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:10px 14px; margin-bottom:20px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.74rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-sitemap" style="color:#F39200;"></i> Subsecciones de Sustentación:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;">
        <button class="c7-pill-btn active" onclick="switchC7Sub('c7-sec-planta', this)" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            1. Planta por Modalidad (Tablas 57 y 58)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-horas', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            2. Dedicación Horaria (20h MT / 40h TC)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-coherencia', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            3. Coherencia & Verificación (Tablas 63 y 64)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-proyeccion', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            4. Proyección a 7 Años (Tabla 67)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-seleccion', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            5. Estatuto, Selección & Vinculación
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-desarrollo', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            6. Cualificación, Bienestar & Evaluación 360°
        </button>
    </div>
</div>

<div id="c7-content-container">
    <!-- SUBSECCIÓN 1: PLANTA DOCENTE POR MODALIDAD -->
    <div id="c7-sec-planta" class="c7-sub-panel">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                        <i class="fas fa-users-cog" style="color:#F39200;"></i> Planta Profesoral Oficial del Programa
                    </h5>
                    <p style="margin:0; font-size:0.78rem; color:#64748B;">
                        Información canónica de las Tablas 57 (Modalidad Presencial) y 58 (Modalidad Virtual) del Documento Maestro y Tablas 5 y 6 de Completitud.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <button id="btnFilterPresencial" onclick="filterC7Planta('presencial')" style="background:#F39200; color:#FFFFFF; border:none; padding:6px 14px; border-radius:6px; font-size:0.76rem; font-weight:800; cursor:pointer;">
                        <i class="fas fa-chalkboard-teacher mr-1"></i> Presencial (5 Docentes TC)
                    </button>
                    <button id="btnFilterVirtual" onclick="filterC7Planta('virtual')" style="background:#F1F5F9; color:#475569; border:1px solid #CBD5E1; padding:6px 14px; border-radius:6px; font-size:0.76rem; font-weight:800; cursor:pointer;">
                        <i class="fas fa-laptop-code mr-1"></i> Virtual (6 Docentes: 5TC + 1MT)
                    </button>
                    <button id="btnFilterAll" onclick="filterC7Planta('all')" style="background:#F1F5F9; color:#475569; border:1px solid #CBD5E1; padding:6px 14px; border-radius:6px; font-size:0.76rem; font-weight:800; cursor:pointer;">
                        <i class="fas fa-globe mr-1"></i> Ver Todos (11 Docentes)
                    </button>
                </div>
            </div>

            <!-- TARJETAS DE INDICADORES CLAVE DE LA PLANTA -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin-bottom:16px;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #F39200; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Nivel de Titulación</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">100% Posgrado</div>
                    <div style="font-size:0.7rem; color:#F39200; font-weight:700;"><i class="fas fa-user-graduate"></i> 1 Doctor + 9 Magísteres + 1 Especialista</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #16A34A; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Experiencia Profesional</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">11.5 Años Prom.</div>
                    <div style="font-size:0.7rem; color:#475569; font-weight:600;"><i class="fas fa-briefcase"></i> Alta vinculación con sector real y Martech</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #2563EB; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Experiencia Docente</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">8.4 Años Prom.</div>
                    <div style="font-size:0.7rem; color:#2563EB; font-weight:700;"><i class="fas fa-university"></i> Trayectoria en educación superior y AVA</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #9333EA; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Dedicación Normativa</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">20 h MT / 40 h TC</div>
                    <div style="font-size:0.7rem; color:#9333EA; font-weight:700;"><i class="fas fa-check-circle"></i> 420 h semanales totales asignadas</div>
                </div>
            </div>

            <!-- TABLA 57: PRESENCIAL -->
            <div id="c7-tabla52-container" style="margin-bottom:20px;">
                <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#C2410C;">
                        <i class="fas fa-chalkboard mr-1"></i> Tabla 57. Profesores del programa de Marketing Digital – Modalidad Presencial (Documento Maestro y Tabla 5 Completitud)
                    </span>
                    <span style="background:#C2410C; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">5 Docentes TC Asignados (200 h/sem)</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.74rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Nombre del Profesor</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Formación Académica (Pregrado y Posgrado - Anexo 19)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:120px;">Tipo Vinculación</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Asignaturas a Cargo (Sem. I · 6 Grupos)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Prof.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Doc.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:90px;">Dedicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Dr. David Andrés Suárez Suárez</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Líder Disciplinar</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Doctor en Ciencias Económicas y Administrativas</strong> · MBA Dirección de Empresas · Esp. Investigación de Mercados · Esp. Gerencia Logística · Prof. Marketing Internacional · Ing. Industrial · Adm. Empresas.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Fundamentos de Administración / Cátedra de la Paz</strong> (6 grupos)
                                    <div style="font-size:0.67rem; color:#64748B;">22h Doc. · 8h Invest. · 4h Ext. · 4h Gest. · 2h Tut.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">14 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">10 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#C2410C;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Orlando de Jesús Marín Lorduy</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Investigador COLLEGIUM</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Estadística Aplicada</strong> · Especialista en Gerencia de Marketing · Ingeniero Industrial.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Fundamentos de Marketing Digital</strong> (6 grupos)
                                    <div style="font-size:0.67rem; color:#64748B;">22h Doc. · 10h Invest. · 4h Bien. · 4h Internac.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">12 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">9 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#C2410C;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Mario Jaimes Mesa</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Líder Extensión CIDRE</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Gestión de la Tecnología Educativa</strong> · Contador Público.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Fundamentos Contables</strong> (6 grupos)
                                    <div style="font-size:0.67rem; color:#64748B;">22h Doc. · 6h Ext. · 4h Gest. · 2h Bien. · 2h Tut. · 4h Cal.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">11 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">8 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#C2410C;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Helio Ruber López Carreño</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Líder Martech & IA</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster Universitario en Big Data y Ciencia de Datos</strong> · Especialista en Seguridad Informática · Ingeniero de Sistemas.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Competencias Digitales</strong> (6 grupos)
                                    <div style="font-size:0.67rem; color:#64748B;">22h Doc. · 10h Invest. · 4h Bien. · 4h Tut.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">10 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">7 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#C2410C;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Gladys Mayerly Calvete Arenas</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Docente de Área Básica</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Tecnologías Digitales Aplicadas a la Educación</strong> · Esp. Administración de la Informática Educativa · Licenciada en Matemáticas.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Matemática</strong> (6 grupos)
                                    <div style="font-size:0.67rem; color:#64748B;">22h Doc. · 4h Invest. · 6h Ext. · 4h Gest. · 2h Tut. · 2h Cal.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">9 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">8 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#C2410C;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- TABLA 58: VIRTUAL -->
            <div id="c7-tabla53-container">
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#1E40AF;">
                        <i class="fas fa-laptop-code mr-1"></i> Tabla 58. Profesores del programa de Marketing Digital – Modalidad Virtual (Documento Maestro y Tabla 6 Completitud)
                    </span>
                    <span style="background:#1E40AF; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">6 Docentes Asignados (5 TC + 1 MT · 220 h/sem)</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.74rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Nombre del Profesor</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Formación Académica (Pregrado y Posgrado - Anexo 19)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:120px;">Tipo Vinculación</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Asignaturas a Cargo (Sem. I · 6 Secciones LMS)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Prof.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Doc.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:90px;">Dedicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Wilder Yesid Bohórquez Barrera</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Líder Humanidades Virtual</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Asesoría Jurídica de Empresas</strong> · Especialista en Investigación Criminal · Abogado · Administrador de Empresas.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Cátedra de la Paz</strong> (6 secciones LMS Moodle 5.2)
                                    <div style="font-size:0.67rem; color:#64748B;">24h Doc. (13h Feedback) · 10h Invest. · 4h Bien. · 2h Tut.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">13 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">8 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Pablo Andrés Pérez Gutiérrez</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Líder Marketing Digital</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Administración con énfasis en Marketing</strong> · Ingeniero Industrial.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Fundamentos de Marketing Digital</strong> (6 secciones LMS)
                                    <div style="font-size:0.67rem; color:#64748B;">24h Doc. (13h Feedback) · 4h Invest. · 2h Ext. · 4h Gest. · 4h Cal.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">12 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">9 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Esp. Rosa Matilde Rueda Díaz</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Docente Gestión Financiera</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Especialista en Docencia Universitaria</strong> · Contadora Pública.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Fundamentos Contables</strong> (6 secciones LMS)
                                    <div style="font-size:0.67rem; color:#64748B;">24h Doc. (13h Feedback) · 4h Invest. · 2h Ext. · 4h Bien. · 4h Cal.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">15 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">11 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. José Fabián Díaz Silva</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Líder TIC & Software</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Software Libre</strong> · Especialista en Tecnologías Avanzadas para Desarrollo de Software · Ingeniero de Sistemas.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Competencias Digitales</strong> (6 secciones LMS)
                                    <div style="font-size:0.67rem; color:#64748B;">24h Doc. (13h Feedback) · 4h Invest. · 2h Ext. · 4h Gest. · 4h Cal.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">11 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">8 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:10px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Sandra Janeth Gómez</div>
                                    <div style="font-size:0.67rem; color:#64748B;">Docente Martech & Datos</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Gerencia de Marketing</strong> · Administradora de Empresas.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#166534;">
                                    <span style="background:#DCFCE7; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · TC</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Matemática</strong> (6 secciones LMS)
                                    <div style="font-size:0.67rem; color:#64748B;">24h Doc. (13h Feedback) · 4h Invest. · 6h Ext. · 4h Gest. · 2h Tut.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">10 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">7 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">
                                    <strong>40 h / sem</strong>
                                </td>
                            </tr>
                            <tr style="background:#FEF3C7; font-weight:700;">
                                <td style="padding:10px 12px; font-weight:800; color:#92400E; border:1px solid #E2E8F0;">
                                    <div style="font-size:0.78rem;">Mg. Andrea Hernández Buitrago</div>
                                    <div style="font-size:0.67rem; color:#92400E;">Docente Medio Tiempo (20h)</div>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#334155; line-height:1.35;">
                                    <strong>Magíster en Administración</strong> · Especialización Tecnológica en Gestión y Seguridad de Bases de Datos · Ingeniera Industrial.
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:700; color:#B45309;">
                                    <span style="background:#FDE68A; padding:3px 8px; border-radius:4px; font-size:0.68rem;">Obra Labor · MT</span>
                                </td>
                                <td style="padding:10px 12px; border:1px solid #E2E8F0; color:#1E293B;">
                                    <strong>Fundamentos de Administración</strong> (6 secciones LMS)
                                    <div style="font-size:0.67rem; color:#64748B;">12h Docencia mediada · 2h Invest. · 1h Ext. · 3h Gest. · 2h Tut.</div>
                                </td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">8 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#2563EB;">6 años</td>
                                <td style="padding:10px 12px; text-align:center; border:1px solid #E2E8F0; font-weight:800; color:#B45309;">
                                    <strong>20 h / sem</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 2: DEDICACIÓN HORARIA (20h MT / 40h TC) -->
    <div id="c7-sec-horas" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                        <i class="fas fa-business-time" style="color:#16A34A;"></i> Distribución Equilibrada de Horas de Dedicación
                    </h5>
                    <p style="margin:0; font-size:0.78rem; color:#64748B;">
                        Modelo institucional 50/15/10/10/15 con <strong>13 horas semanales de feedback individualizado en entornos virtuales</strong> y estricto ajuste normativo: <strong>Medio Tiempo a 20 h/sem</strong> y <strong>Tiempo Completo a 40 h/sem</strong>.
                    </p>
                </div>
                <div style="background:#DCFCE7; border:1px solid #86EFAC; border-radius:6px; padding:6px 12px; font-size:0.75rem; font-weight:800; color:#15803D;">
                    <i class="fas fa-check-double mr-1"></i> Balance 100% Armónico con Decreto 1330
                </div>
            </div>

            <!-- COMPARATIVA EN GRÁFICO DE BARRAS / DEDICACIÓN -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-weight:800; font-size:0.8rem; color:#1E293B;">
                        <i class="fas fa-chart-bar" style="color:#F39200;"></i> Comparativa de Carga Horaria Semanal por Función Misional
                    </span>
                    <span style="font-size:0.7rem; color:#64748B;">Base: 40 h TC Presencial / 40 h TC Virtual / 20 h MT Virtual</span>
                </div>
                <div style="height:220px; position:relative;">
                    <canvas id="c7HorasChart" style="max-height:220px;"></canvas>
                </div>
            </div>

            <!-- TABLAS DETALLADAS DE DEDICACIÓN HORARIA -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(310px, 1fr)); gap:14px;">
                <!-- TABLA TC PRESENCIAL -->
                <div style="border:1px solid #CBD5E1; border-top:4px solid #F39200; border-radius:8px; padding:14px; background:#FFFFFF;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <h6 style="margin:0; font-size:0.82rem; font-weight:800; color:#C2410C; font-family:'Montserrat';">
                            Docente Tiempo Completo Presencial (40 h)
                        </h6>
                        <span style="background:#FFF7ED; color:#C2410C; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">100% Dedicación</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#F1F5F9; color:#475569;">
                                <th style="padding:6px; text-align:left;">Actividad Misional</th>
                                <th style="padding:6px; text-align:center;">Horas</th>
                                <th style="padding:6px; text-align:center;">%</th>
                                <th style="padding:6px; text-align:left;">Descripción Operativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Docencia Directa y Tutorías</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">22 h</td>
                                <td style="padding:6px; text-align:center; color:#16A34A; font-weight:700;">55%</td>
                                <td style="padding:6px; color:#64748B;">Cátedra presencial en aula (6 grupos) + asesorías académicas</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Investigación (COLLEGIUM)</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">8 h</td>
                                <td style="padding:6px; text-align:center; color:#2563EB; font-weight:700;">20%</td>
                                <td style="padding:6px; color:#64748B;">Proyectos aplicados, semillero INNOVMARKET y artículos MinCiencias</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Extensión y CIDRE</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">4 h</td>
                                <td style="padding:6px; text-align:center; color:#9333EA; font-weight:700;">10%</td>
                                <td style="padding:6px; color:#64748B;">Consultorio empresarial CIDRE, articulación FENALCO y Cámara de Comercio</td>
                            </tr>
                            <tr>
                                <td style="padding:6px; font-weight:700;">Gestión Curricular & Eval.</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">6 h</td>
                                <td style="padding:6px; text-align:center; color:#EA580C; font-weight:700;">15%</td>
                                <td style="padding:6px; color:#64748B;">Comités curriculares, rúbricas analíticas, SIGA y cualificación</td>
                            </tr>
                            <tr style="background:#FFF7ED; font-weight:800; border-top:2px solid #FED7AA;">
                                <td style="padding:6px; color:#C2410C;">TOTAL SEMANAL</td>
                                <td style="padding:6px; text-align:center; color:#C2410C;">40 h</td>
                                <td style="padding:6px; text-align:center; color:#C2410C;">100%</td>
                                <td style="padding:6px; color:#C2410C;">Dedicación plena presencial garantizada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- TABLA TC VIRTUAL (13h FEEDBACK) -->
                <div style="border:1px solid #CBD5E1; border-top:4px solid #2563EB; border-radius:8px; padding:14px; background:#FFFFFF;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <h6 style="margin:0; font-size:0.82rem; font-weight:800; color:#1E40AF; font-family:'Montserrat';">
                            Docente Tiempo Completo Virtual (40 h)
                        </h6>
                        <span style="background:#EFF6FF; color:#1E40AF; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">13h Feedback LMS</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#F1F5F9; color:#475569;">
                                <th style="padding:6px; text-align:left;">Actividad Misional</th>
                                <th style="padding:6px; text-align:center;">Horas</th>
                                <th style="padding:6px; text-align:center;">%</th>
                                <th style="padding:6px; text-align:left;">Descripción Operativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #F1F5F9; background:#EFF6FF;">
                                <td style="padding:6px; font-weight:700; color:#1E40AF;">Mediación AVA & Feedback</td>
                                <td style="padding:6px; text-align:center; font-weight:800; color:#1E40AF;">24 h</td>
                                <td style="padding:6px; text-align:center; color:#1E40AF; font-weight:800;">60%</td>
                                <td style="padding:6px; color:#1E40AF; font-size:0.7rem;"><strong>13h feedback semanal</strong> (8h rúbricas + 5h foros y sincrónicas en Moodle 5.2)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Investigación (COLLEGIUM)</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">4 h</td>
                                <td style="padding:6px; text-align:center; color:#2563EB; font-weight:700;">10%</td>
                                <td style="padding:6px; color:#64748B;">Semillero INNOVMARKET y proyectos de analítica digital</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Extensión y Sector Real</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">2 h</td>
                                <td style="padding:6px; text-align:center; color:#9333EA; font-weight:700;">5%</td>
                                <td style="padding:6px; color:#64748B;">Consultoría CIDRE remota y retos empresariales con MiPymes</td>
                            </tr>
                            <tr>
                                <td style="padding:6px; font-weight:700;">Gestión AVA & Permanencia</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">10 h</td>
                                <td style="padding:6px; text-align:center; color:#EA580C; font-weight:700;">25%</td>
                                <td style="padding:6px; color:#64748B;">Monitoreo temprano en SIGA, diseño ADDIE y atención a estudiantes</td>
                            </tr>
                            <tr style="background:#EFF6FF; font-weight:800; border-top:2px solid #BFDBFE;">
                                <td style="padding:6px; color:#1E40AF;">TOTAL SEMANAL</td>
                                <td style="padding:6px; text-align:center; color:#1E40AF;">40 h</td>
                                <td style="padding:6px; text-align:center; color:#1E40AF;">100%</td>
                                <td style="padding:6px; color:#1E40AF;">Ratio óptimo 1:23 garantizado en Moodle 5.2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- TABLA MT VIRTUAL -->
                <div style="border:1px solid #CBD5E1; border-top:4px solid #D97706; border-radius:8px; padding:14px; background:#FFFFFF;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <h6 style="margin:0; font-size:0.82rem; font-weight:800; color:#B45309; font-family:'Montserrat';">
                            Docente Medio Tiempo Virtual (20 h)
                        </h6>
                        <span style="background:#FEF3C7; color:#B45309; font-size:0.68rem; font-weight:800; padding:2px 6px; border-radius:4px;">Mg. Andrea Hernández</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#F1F5F9; color:#475569;">
                                <th style="padding:6px; text-align:left;">Actividad Misional</th>
                                <th style="padding:6px; text-align:center;">Horas</th>
                                <th style="padding:6px; text-align:center;">%</th>
                                <th style="padding:6px; text-align:left;">Descripción Operativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Docencia Mediada Moodle 5.2</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">12 h</td>
                                <td style="padding:6px; text-align:center; color:#16A34A; font-weight:700;">60%</td>
                                <td style="padding:6px; color:#64748B;">Atención a secciones LMS, calificación y feedback formativo</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Tutorías & Permanencia</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">2 h</td>
                                <td style="padding:6px; text-align:center; color:#2563EB; font-weight:700;">10%</td>
                                <td style="padding:6px; color:#64748B;">Acompañamiento individual a estudiantes y resolución de dudas</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Investigación Formativa</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">2 h</td>
                                <td style="padding:6px; text-align:center; color:#9333EA; font-weight:700;">10%</td>
                                <td style="padding:6px; color:#64748B;">Articulación con semillero INNOVMARKET y análisis de datos</td>
                            </tr>
                            <tr style="border-bottom:1px solid #F1F5F9;">
                                <td style="padding:6px; font-weight:700;">Extensión</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">1 h</td>
                                <td style="padding:6px; text-align:center; color:#059669; font-weight:700;">5%</td>
                                <td style="padding:6px; color:#64748B;">Articulación sectorial y casos de estudio empresariales</td>
                            </tr>
                            <tr>
                                <td style="padding:6px; font-weight:700;">Gestión Docente y SIGA</td>
                                <td style="padding:6px; text-align:center; font-weight:800;">3 h</td>
                                <td style="padding:6px; text-align:center; color:#EA580C; font-weight:700;">15%</td>
                                <td style="padding:6px; color:#64748B;">Registro de notas, reuniones de área y autoevaluación</td>
                            </tr>
                            <tr style="background:#FEF3C7; font-weight:800; border-top:2px solid #FDE68A;">
                                <td style="padding:6px; color:#B45309;">TOTAL SEMANAL</td>
                                <td style="padding:6px; text-align:center; color:#B45309;">20 h</td>
                                <td style="padding:6px; text-align:center; color:#B45309;">100%</td>
                                <td style="padding:6px; color:#B45309;">Cumplimiento estricto de 20 h normativas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 3: COHERENCIA Y VERIFICACIÓN (TABLAS 63 Y 64) -->
    <div id="c7-sec-coherencia" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="margin-bottom:14px;">
                <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                    <i class="fas fa-sitemap" style="color:#2563EB;"></i> Coherencia Curricular y Verificación de Compromisos
                </h5>
                <p style="margin:0; font-size:0.78rem; color:#64748B;">
                    Alineación integral entre las Condiciones de Calidad del Decreto 1330 y las horas asignadas por tipo de vinculación (Tabla 63), con verificación nominal por docente (Tabla 64).
                </p>
            </div>

            <!-- TABLA 63: MAPA DE COHERENCIA -->
            <div style="margin-bottom:20px;">
                <div style="background:#EEF2FF; border:1px solid #C7D2FE; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#3730A3;">
                        <i class="fas fa-project-diagram mr-1"></i> Tabla 63. Mapa de Coherencia: Condiciones de Calidad vs. Horas Docentes por Tipo de Vinculación
                    </span>
                    <span style="background:#3730A3; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">Articulación Misional Decreto 1330</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.75rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Condición de Calidad (CC)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Horas TC Presencial</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Horas TC Virtual</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Horas MT Virtual</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Actividades Específicas del Programa que se Materializan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:9px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <i class="fas fa-book-open" style="color:#F39200; margin-right:4px;"></i> CC3 – Aspectos Curriculares
                                </td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#C2410C; border:1px solid #E2E8F0;">22 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#1E40AF; border:1px solid #E2E8F0;">24 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#B45309; border:1px solid #E2E8F0;">12 h / sem</td>
                                <td style="padding:9px 12px; border:1px solid #E2E8F0; color:#475569;">
                                    Impartición de los 48 microcurrículos (3 créditos c/u), diseño de rúbricas analíticas socioformativas, nivelación en inglés B1 (Cambridge One) y retroalimentación periódica.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:9px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <i class="fas fa-tasks" style="color:#2563EB; margin-right:4px;"></i> CC4 – Organización Actividades
                                </td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#C2410C; border:1px solid #E2E8F0;">6 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#1E40AF; border:1px solid #E2E8F0;">10 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#B45309; border:1px solid #E2E8F0;">3 h / sem</td>
                                <td style="padding:9px 12px; border:1px solid #E2E8F0; color:#475569;">
                                    Operación de bloques modulares de 8 semanas, gestión instruccional ADDIE, monitoreo de alertas en SIGA Datasae y atención personalizada a la permanencia.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:9px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <i class="fas fa-flask" style="color:#16A34A; margin-right:4px;"></i> CC5 – Investigación e Innovación
                                </td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#C2410C; border:1px solid #E2E8F0;">8 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#1E40AF; border:1px solid #E2E8F0;">4 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#B45309; border:1px solid #E2E8F0;">2 h / sem</td>
                                <td style="padding:9px 12px; border:1px solid #E2E8F0; color:#475569;">
                                    Tutoría al Semillero INNOVMARKET, ejecución de proyectos en Grupo COLLEGIUM (MinCiencias), ponencias en congresos internacionales y prototipado Martech.
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:9px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <i class="fas fa-handshake" style="color:#9333EA; margin-right:4px;"></i> CC6 – Sector Externo & Proyección
                                </td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#C2410C; border:1px solid #E2E8F0;">4 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#1E40AF; border:1px solid #E2E8F0;">2 h / sem</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#B45309; border:1px solid #E2E8F0;">1 h / sem</td>
                                <td style="padding:9px 12px; border:1px solid #E2E8F0; color:#475569;">
                                    Asistencia técnica a MiPymes a través del Consultorio CIDRE, retos prácticos articulados con FENALCO, Cámara de Comercio de Bucaramanga y ACOPI Santander.
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:9px 12px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">
                                    <i class="fas fa-laptop" style="color:#2563EB; margin-right:4px;"></i> CC8 – Medios Educativos
                                </td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#C2410C; border:1px solid #E2E8F0;">Transversal</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#1E40AF; border:1px solid #E2E8F0;">13 h Feedback</td>
                                <td style="padding:9px 12px; text-align:center; font-weight:800; color:#B45309; border:1px solid #E2E8F0;">Integrada</td>
                                <td style="padding:9px 12px; border:1px solid #E2E8F0; color:#475569;">
                                    Producción de Objetos Virtuales de Aprendizaje (OVA), dinamización de foros en LMS Moodle 5.2 en AWS Cloud y uso de e-Libro Cátedra (98.199 títulos).
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- TABLA 64: VERIFICACIÓN NOMINAL POR DOCENTE -->
            <div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#166534;">
                        <i class="fas fa-user-check mr-1"></i> Tabla 64. Verificación por Docente: Asignación Horaria y Compromisos de Condiciones de Calidad
                    </span>
                    <span style="background:#166534; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">11 Docentes Vinculados</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.74rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155; width:220px;">Docente</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:110px;">Tipo Vínculo</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Actividades Concretas Asignadas (Sem. I)</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Compromisos de Condiciones de Calidad Materializados</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">Dr. David Andrés Suárez Suárez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FFF7ED; color:#C2410C; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Presencial · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Fundamentos de Administración y Cátedra de la Paz (6 grupos presenciales).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> planeación microcurricular; <strong>CC5:</strong> formulación de proyectos COLLEGIUM; <strong>CC6:</strong> consultorías CIDRE.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">Mg. Orlando de Jesús Marín Lorduy</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FFF7ED; color:#C2410C; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Presencial · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Fundamentos de Marketing Digital (6 grupos presenciales).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> analítica aplicada; <strong>CC5:</strong> tutoría al Semillero INNOVMARKET; <strong>CC8:</strong> laboratorios Martech.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">Mg. Mario Jaimes Mesa</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FFF7ED; color:#C2410C; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Presencial · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Fundamentos Contables (6 grupos presenciales).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> finanzas para marketing; <strong>CC6:</strong> articulación con ACOPI y FENALCO; <strong>CC4:</strong> seguimiento a la permanencia.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">Mg. Helio Ruber López Carreño</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FFF7ED; color:#C2410C; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Presencial · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Competencias Digitales (6 grupos presenciales).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> IA y Big Data; <strong>CC5:</strong> prototipado de soluciones digitales; <strong>CC8:</strong> uso de suites Adobe y analítica cloud.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1A1A1B;">Mg. Gladys Mayerly Calvete Arenas</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FFF7ED; color:#C2410C; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Presencial · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Matemática (6 grupos presenciales).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> modelado cuantitativo; <strong>CC4:</strong> tutorías personalizadas en horario diurno; <strong>CC8:</strong> software matemático interactivo.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#EFF6FF;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">Mg. Wilder Yesid Bohórquez Barrera</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1E40AF; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Virtual · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Cátedra de la Paz (6 secciones LMS Moodle 5.2).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> ética y marco legal digital; <strong>CC4:</strong> 13h de feedback y foros de debate; <strong>CC5:</strong> investigación formativa en derechos digitales.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#EFF6FF;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">Mg. Pablo Andrés Pérez Gutiérrez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1E40AF; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Virtual · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Fundamentos de Marketing Digital (6 secciones LMS Moodle 5.2).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> estrategias de conversión; <strong>CC8:</strong> producción de RED y simuladores; <strong>CC6:</strong> articulación con retos MiPyme virtuales.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#EFF6FF;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">Esp. Rosa Matilde Rueda Díaz</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1E40AF; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Virtual · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Fundamentos Contables (6 secciones LMS Moodle 5.2).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> presupuestos de marketing; <strong>CC4:</strong> acompañamiento asincrónico 24/7; <strong>CC8:</strong> hojas de cálculo en la nube y guías interactivas.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#EFF6FF;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">Mg. José Fabián Díaz Silva</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1E40AF; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Virtual · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Competencias Digitales (6 secciones LMS Moodle 5.2).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> diseño web y software libre; <strong>CC8:</strong> administración de aulas Moodle 5.2; <strong>CC5:</strong> semilleros virtuales de desarrollo.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#EFF6FF;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E40AF;">Mg. Sandra Janeth Gómez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1E40AF; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Virtual · TC</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Matemática (6 secciones LMS Moodle 5.2).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> cálculo de ROI y métricas clave; <strong>CC4:</strong> tutorías sincrónicas Teams; <strong>CC8:</strong> ejercicios interactivos con feedback inmediato.</td>
                            </tr>
                            <tr style="background:#FEF3C7;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#92400E;">Mg. Andrea Hernández Buitrago</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FDE68A; color:#92400E; padding:2px 6px; border-radius:4px; font-size:0.68rem; font-weight:800;">Virtual · MT</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#1E293B;">Fundamentos de Administración (6 secciones LMS Moodle 5.2).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> gestión organizacional; <strong>CC4:</strong> retroalimentación en 20h normativas; <strong>CC6:</strong> articulación con redes colaborativas.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 4: PROYECCIÓN A 7 AÑOS (TABLA 67) -->
    <div id="c7-sec-proyeccion" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                        <i class="fas fa-chart-line" style="color:#F39200;"></i> Proyección Diferenciada de Planta Docente a 7 Años
                    </h5>
                    <p style="margin:0; font-size:0.78rem; color:#64748B;">
                        Tabla 67 del Documento Maestro: Horizonte 2026-1 a 2032-2 (vigencia de 7 años). Crecimiento escalonado de 11 iniciales hasta <strong>23 profesores por modalidad</strong> (17 TC + 6 MT) asegurando una relación óptima de <strong>1:23 a 1:35</strong>.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span style="background:#FFF7ED; color:#EA580C; border:1px solid #FDBA74; font-weight:800; font-size:0.73rem; padding:4px 10px; border-radius:16px;">
                        Ratio Inicial: 1:23
                    </span>
                    <span style="background:#EFF6FF; color:#2563EB; border:1px solid #93C5FD; font-weight:800; font-size:0.73rem; padding:4px 10px; border-radius:16px;">
                        Ratio Consolidación: 1:32
                    </span>
                    <span style="background:#F0FDF4; color:#16A34A; border:1px solid #86EFAC; font-weight:800; font-size:0.73rem; padding:4px 10px; border-radius:16px;">
                        Meta: 5 Ph.D. + 18 Mg.
                    </span>
                </div>
            </div>

            <!-- GRÁFICO DE LÍNEAS / ESCALAMIENTO -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-weight:800; font-size:0.8rem; color:#1E293B;">
                        <i class="fas fa-project-diagram" style="color:#F39200;"></i> Crecimiento Armónico: Población Estudiantil vs. Docentes Asignados y Ratio (1:N)
                    </span>
                    <span style="font-size:0.7rem; color:#16A34A; font-weight:700;"><i class="fas fa-arrow-up"></i> Sostenibilidad Financiera Planificada</span>
                </div>
                <div style="height:230px; position:relative;">
                    <canvas id="c7ProyeccionChart" style="max-height:230px;"></canvas>
                </div>
            </div>

            <!-- TABLA 67 MAESTRA DE PROYECCIÓN -->
            <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.74rem; background:#FFFFFF;">
                    <thead>
                        <tr style="background:#1A1A1B; color:#FFFFFF;">
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">Período</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">Estudiantes Activos</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">Docentes Proyectados</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">Relación Est./Doc.</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">Titulación Máxima</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">Dedicación (MT / TC)</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">% Docencia/Ext.</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">% Investigación</th>
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155;">% Gestión</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:#FFF7ED; font-weight:700;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2026-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">140</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; color:#C2410C; font-weight:900;">6</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:23</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 1 · Maestría: 5</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 1 · TC: 5</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">33%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">17%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2026-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">239</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">10</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:24</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 2 · Maestría: 8</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 3 · TC: 7</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">30%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">20%</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2027-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">324</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">13</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:25</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 2 · Maestría: 11</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 4 · TC: 9</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">54%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">31%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">15%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2027-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">406</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">14</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:29</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 3 · Maestría: 11</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 4 · TC: 10</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">36%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">14%</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2028-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">473</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">14</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:34</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 3 · Maestría: 11</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 4 · TC: 10</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">36%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">14%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2028-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">531</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">15</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:35</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 4 · Maestría: 11</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 5 · TC: 10</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">53%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">33%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">13%</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2029-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">552</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">16</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:35</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 4 · Maestría: 12</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 11</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">38%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">13%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2029-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">591</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">17</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:35</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 4 · Maestría: 13</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 5 · TC: 12</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">53%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">41%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">12%</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2030-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">624</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">18</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:35</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 4 · Maestría: 14</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 12</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">39%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">11%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2030-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">652</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">19</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:34</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 4 · Maestría: 15</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 13</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">53%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">37%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">11%</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2031-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">675</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">20</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:34</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 5 · Maestría: 15</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 14</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">55%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">35%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">10%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2031-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">696</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">21</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:33</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 5 · Maestría: 16</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 15</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">52%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">38%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">10%</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2032-1</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">714</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-weight:800;">22</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:32</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 5 · Maestría: 17</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 16</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">50%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">41%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">9%</td>
                        </tr>
                        <tr style="background:#F0FDF4; font-weight:800; color:#15803D;">
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">2032-2</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">728</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0; font-size:0.85rem; color:#15803D;">23</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">1:32</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">Doctorado: 5 · Maestría: 18</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">MT: 6 · TC: 17</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">52%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">39%</td>
                            <td style="padding:8px 10px; text-align:center; border:1px solid #E2E8F0;">9%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 5: ESTATUTO, SELECCIÓN & VINCULACIÓN -->
    <div id="c7-sec-seleccion" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="margin-bottom:14px;">
                <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                    <i class="fas fa-file-contract" style="color:#C2410C;"></i> Gobernanza Docente: Estatuto, Selección Meritocrática & Vinculación
                </h5>
                <p style="margin:0; font-size:0.78rem; color:#64748B;">
                    Estructura formal de gestión profesoral sustentada en el Estatuto Docente institucional (Acuerdo CS No. 011 de 2024 - Anexo 17) de la Corporación Escuela Tecnológica del Oriente.
                </p>
            </div>

            <!-- 5 PILARES DEL ESTATUTO DOCENTE -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:18px;">
                <h6 style="margin:0 0 12px; font-size:0.85rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-landmark" style="color:#F39200;"></i> Los 5 Pilares del Estatuto Docente Institucional (Acuerdo CS 011 / Anexo 17)
                </h6>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(190px, 1fr)); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #059669; border-radius:6px; padding:10px;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <div style="width:26px; height:26px; background:#D1FAE5; color:#059669; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900;">1</div>
                            <h6 style="margin:0; font-size:0.78rem; font-weight:800; color:#065F46;">Derechos y Deberes</h6>
                        </div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.35;">Libertad de cátedra, rigor ético, propiedad intelectual y deber de actualización pedagógica continua.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #65A30D; border-radius:6px; padding:10px;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <div style="width:26px; height:26px; background:#ECFCCB; color:#65A30D; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900;">2</div>
                            <h6 style="margin:0; font-size:0.78rem; font-weight:800; color:#4D7C0F;">Gobierno Colegiado</h6>
                        </div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.35;">Representación activa con voz y voto en Consejo Superior, Consejo Académico y Comités Curriculares.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #0284C7; border-radius:6px; padding:10px;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <div style="width:26px; height:26px; background:#E0F2FE; color:#0284C7; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900;">3</div>
                            <h6 style="margin:0; font-size:0.78rem; font-weight:800; color:#0369A1;">Selección Meritocrática</h6>
                        </div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.35;">Convocatorias públicas transparentes: análisis de HV, microclase ante pares y evaluación de competencias tecno-pedagógicas.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #CA8A04; border-radius:6px; padding:10px;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <div style="width:26px; height:26px; background:#FEF9C3; color:#CA8A04; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900;">4</div>
                            <h6 style="margin:0; font-size:0.78rem; font-weight:800; color:#A16207;">Contratación Formal</h6>
                        </div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.35;">Contratos laborales formales con afiliación a seguridad social integral y estricta estabilidad jurídica.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-left:3px solid #EA580C; border-radius:6px; padding:10px;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <div style="width:26px; height:26px; background:#FFEDD5; color:#EA580C; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:900;">5</div>
                            <h6 style="margin:0; font-size:0.78rem; font-weight:800; color:#C2410C;">Escalafón & Carrera</h6>
                        </div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.35;">Ruta de ascenso escalonada: Auxiliar, Asistente, Asociado y Titular con estímulos a la producción científica.</p>
                    </div>
                </div>
            </div>

            <!-- FASES DEL PROCESO DE SELECCIÓN DOCENTE -->
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:8px; overflow:hidden;">
                <div style="background:#F1F5F9; border-bottom:1px solid #CBD5E1; padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.8rem; color:#1E293B;">
                        <i class="fas fa-tasks mr-1"></i> Proceso Meritocrático de Selección Docente (Estatuto Art. 12 - 15)
                    </span>
                    <span style="background:#2563EB; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">Rigor y Transparencia Institucional</span>
                </div>
                <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                    <thead>
                        <tr style="background:#1A1A1B; color:#FFFFFF;">
                            <th style="padding:8px 10px; text-align:center; border:1px solid #334155; width:70px;">% Ponderación</th>
                            <th style="padding:8px 10px; text-align:left; border:1px solid #334155; width:180px;">Fase / Concepto</th>
                            <th style="padding:8px 10px; text-align:left; border:1px solid #334155;">Detalle Evaluativo y Criterios Institucionales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:8px 10px; text-align:center; font-weight:900; color:#2563EB; border:1px solid #E2E8F0;">30%</td>
                            <td style="padding:8px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">1. Hoja de Vida y Títulos</td>
                            <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#475569;">Verificación de títulos de pregrado y posgrado convalidados (100% posgradual), publicaciones MinCiencias y experiencia profesional en Martech/TIC.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; font-weight:900; color:#16A34A; border:1px solid #E2E8F0;">35%</td>
                            <td style="padding:8px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">2. Prueba Psicotécnica y Microclase</td>
                            <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#475569;">Sustentación de clase pedagógica ante comité evaluador: dominio disciplinar, mediación tecno-pedagógica en Moodle 5.2, rúbricas analíticas y resolución de casos.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #E2E8F0;">
                            <td style="padding:8px 10px; text-align:center; font-weight:900; color:#F39200; border:1px solid #E2E8F0;">20%</td>
                            <td style="padding:8px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">3. Entrevista Institucional</td>
                            <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#475569;">Entrevista con Decanatura y Vicerrectoría Académica: alineación con el PEI, modelo pedagógico socioformativo y compromiso ético institucional.</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:8px 10px; text-align:center; font-weight:900; color:#9333EA; border:1px solid #E2E8F0;">15%</td>
                            <td style="padding:8px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">4. Evaluación de Competencias Digitales</td>
                            <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#475569;">Prueba práctica en LMS Moodle 5.2: diseño de recursos educativos, configuración de foros evaluativos y manejo de suites de analítica.</td>
                        </tr>
                        <tr style="background:#EEF2FF; font-weight:800;">
                            <td style="padding:8px 10px; text-align:center; color:#3730A3; border:1px solid #C7D2FE;">100%</td>
                            <td style="padding:8px 10px; color:#3730A3; border:1px solid #C7D2FE;">TOTAL PONDERADO</td>
                            <td style="padding:8px 10px; color:#3730A3; border:1px solid #C7D2FE;">Puntaje mínimo de elegibilidad: 80/100 puntos para conformación del banco de elegibles.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 6: CUALIFICACIÓN, BIENESTAR & EVALUACIÓN 360° -->
    <div id="c7-sec-desarrollo" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="margin-bottom:14px;">
                <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                    <i class="fas fa-award" style="color:#F39200;"></i> Plan de Cualificación, Bienestar y Evaluación del Desempeño
                </h5>
                <p style="margin:0; font-size:0.78rem; color:#64748B;">
                    Plan de Formación Docente continuo (Anexo 20), dimensiones de bienestar integral docente y modelo de evaluación triádico 360° (Autoevaluación, Heteroevaluación y Coevaluación).
                </p>
            </div>

            <!-- PLAN DE CUALIFICACIÓN: 6 COMPONENTES FORMATIVOS -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:18px;">
                <h6 style="margin:0 0 10px; font-size:0.84rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-lightbulb" style="color:#CA8A04;"></i> Plan de Cualificación Docente: 6 Ejes Estratégicos (Anexo 20)
                </h6>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:3px solid #2563EB; border-radius:6px; padding:10px;">
                        <strong style="color:#2563EB; font-size:0.75rem; display:block; margin-bottom:2px;">1. Tecnopedagogía Moodle 5.2</strong>
                        <p style="margin:0; font-size:0.69rem; color:#64748B;">Diseño de cursos modulares en bloques de 8 semanas, calificación con rúbricas analíticas y feedback individualizado.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:3px solid #16A34A; border-radius:6px; padding:10px;">
                        <strong style="color:#16A34A; font-size:0.75rem; display:block; margin-bottom:2px;">2. Analítica, Martech & IA</strong>
                        <p style="margin:0; font-size:0.69rem; color:#64748B;">Uso educativo de Google Analytics 4, HubSpot CRM, Adobe Creative Cloud y herramientas de IA generativa para marketing.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:3px solid #F39200; border-radius:6px; padding:10px;">
                        <strong style="color:#F39200; font-size:0.75rem; display:block; margin-bottom:2px;">3. Evaluación por RAPs</strong>
                        <p style="margin:0; font-size:0.69rem; color:#64748B;">Alineación de cortes 20/25/55 con la taxonomía socioformativa de Tobón y medición cuantitativa de competencias.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:3px solid #9333EA; border-radius:6px; padding:10px;">
                        <strong style="color:#9333EA; font-size:0.75rem; display:block; margin-bottom:2px;">4. Metodologías Activas (ABRetos)</strong>
                        <p style="margin:0; font-size:0.69rem; color:#64748B;">Aprendizaje Basado en Retos reales del sector productivo santandereano en alianza con Consultorio CIDRE.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:3px solid #EA580C; border-radius:6px; padding:10px;">
                        <strong style="color:#EA580C; font-size:0.75rem; display:block; margin-bottom:2px;">5. Investigación MinCiencias</strong>
                        <p style="margin:0; font-size:0.69rem; color:#64748B;">Redacción de artículos científicos indexados, formulación de proyectos COLLEGIUM y gestión de semilleros.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-left:3px solid #059669; border-radius:6px; padding:10px;">
                        <strong style="color:#059669; font-size:0.75rem; display:block; margin-bottom:2px;">6. Acompañamiento Socioemocional</strong>
                        <p style="margin:0; font-size:0.69rem; color:#64748B;">Estrategias de empatía digital, detección temprana de riesgo de deserción en SIGA y bienestar docente.</p>
                    </div>
                </div>
            </div>

            <!-- BIENESTAR INTEGRAL DOCENTE -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:18px;">
                <h6 style="margin:0 0 10px; font-size:0.84rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-heartbeat" style="color:#DC2626;"></i> Bienestar Integral Docente: Dimensiones Institucionales
                </h6>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:800; font-size:0.76rem; color:#B91C1C; margin-bottom:2px;"><i class="fas fa-stethoscope mr-1"></i> Salud Ocupacional y Pausas</div>
                        <div style="font-size:0.69rem; color:#64748B;">Protocolos de pausas activas ergonómicas tanto en aulas físicas como en jornadas de teletrabajo/mediación virtual.</div>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:800; font-size:0.76rem; color:#1D4ED8; margin-bottom:2px;"><i class="fas fa-users mr-1"></i> Clima y Convivencia Laboral</div>
                        <div style="font-size:0.69rem; color:#64748B;">Comité de Convivencia Laboral, espacios de diálogo y canales de retroalimentación constructiva continua.</div>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:800; font-size:0.76rem; color:#047857; margin-bottom:2px;"><i class="fas fa-trophy mr-1"></i> Reconocimiento y Estímulos</div>
                        <div style="font-size:0.69rem; color:#64748B;">Reconocimiento a la excelencia docente, incentivos económicos por publicaciones científicas y pasantías académicas.</div>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px;">
                        <div style="font-weight:800; font-size:0.76rem; color:#7C3AED; margin-bottom:2px;"><i class="fas fa-palette mr-1"></i> Recreación y Cultura</div>
                        <div style="font-size:0.69rem; color:#64748B;">Integración a eventos culturales, torneos deportivos institucionales y celebraciones con el núcleo familiar docente.</div>
                    </div>
                </div>
            </div>

            <!-- SISTEMA TRIÁDICO DE EVALUACIÓN DOCENTE 360° -->
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:8px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px; border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                    <h6 style="margin:0; font-size:0.86rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-sync-alt" style="color:#4F46E5;"></i> Sistema Triádico de Evaluación Docente 360° (Estatuto Art. 16)
                    </h6>
                    <span style="background:#EEF2FF; color:#4338CA; font-weight:800; font-size:0.72rem; padding:3px 10px; border-radius:12px;">
                        Evaluación Continua Semestral
                    </span>
                </div>

                <!-- GRÁFICOS DE DONA EVALUACIÓN DOCENTE -->
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px; margin-bottom:16px;">
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <div style="font-weight:800; font-size:0.76rem; color:#1E293B; margin-bottom:8px; text-align:center;">
                            Fuentes Evaluadoras (Ponderación 100%)
                        </div>
                        <div style="height:170px; position:relative;">
                            <canvas id="c7EvalFuentesChart" style="max-height:170px;"></canvas>
                        </div>
                    </div>
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px;">
                        <div style="font-weight:800; font-size:0.76rem; color:#1E293B; margin-bottom:8px; text-align:center;">
                            Dimensiones del Desempeño Evaluadas
                        </div>
                        <div style="height:170px; position:relative;">
                            <canvas id="c7EvalDimensionesChart" style="max-height:170px;"></canvas>
                        </div>
                    </div>
                </div>

                <!-- TABLA SISTEMA TRIÁDICO -->
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:7px 10px; text-align:left; border:1px solid #334155;">Dimensión Evaluada</th>
                                <th style="padding:7px 10px; text-align:center; border:1px solid #334155; width:80px;">% Peso</th>
                                <th style="padding:7px 10px; text-align:left; border:1px solid #334155;">Fuentes que Evalúan</th>
                                <th style="padding:7px 10px; text-align:left; border:1px solid #334155;">Criterios Operativos Institucionales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:7px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">1. Pedagógica y Didáctica</td>
                                <td style="padding:7px 10px; text-align:center; font-weight:800; color:#2563EB; border:1px solid #E2E8F0;">35%</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Estudiantes (Heteroevaluación) y Coordinación</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Dominio de conceptos de marketing digital, claridad explicativa y rúbricas analíticas socioformativas.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
                                <td style="padding:7px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">2. Mediación AVA Moodle 5.2 & Feedback</td>
                                <td style="padding:7px 10px; text-align:center; font-weight:800; color:#F39200; border:1px solid #E2E8F0;">30%</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Estudiantes y Auditoría Tecno-pedagógica</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Cumplimiento de las 13h semanales de feedback, dinamización de foros de debate y respuesta antes de 48 horas.</td>
                            </tr>
                            <tr style="border-bottom:1px solid #E2E8F0;">
                                <td style="padding:7px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">3. Investigación & Proyección Social</td>
                                <td style="padding:7px 10px; text-align:center; font-weight:800; color:#16A34A; border:1px solid #E2E8F0;">20%</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Líder de Investigación y Decanatura</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Participación en Semillero INNOVMARKET, productos en COLLEGIUM y consultorías CIDRE.</td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:7px 10px; font-weight:800; color:#1A1A1B; border:1px solid #E2E8F0;">4. Administrativa y Compromiso TO</td>
                                <td style="padding:7px 10px; text-align:center; font-weight:800; color:#9333EA; border:1px solid #E2E8F0;">15%</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Autoevaluación Docente y Decanatura</td>
                                <td style="padding:7px 10px; border:1px solid #E2E8F0; color:#475569;">Puntualidad en registro de notas en SIGA Datasae, asistencia a comités curriculares y ética profesional.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="margin-top:12px; background:#F0FDF4; border:1px solid #86EFAC; border-radius:6px; padding:8px 12px; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-check-circle" style="color:#16A34A;"></i>
                    <span style="font-size:0.72rem; color:#15803D; font-weight:700;">
                        Los resultados de la evaluación 360° alimentan de forma directa el Plan de Mejoramiento Individual y las prioridades de cualificación anual del Anexo 20.
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

/* CONTROLADOR DE PESTAÑAS SUBSECCIONES C7 */
window.switchC7Sub = function(panelId, btn) {
    document.querySelectorAll('.c7-sub-panel').forEach(p => p.style.display = 'none');
    const target = document.getElementById(panelId);
    if (target) target.style.display = 'block';

    document.querySelectorAll('.c7-pill-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = '#F8FAFC';
        b.style.color = '#334155';
        b.style.border = '1px solid #CBD5E1';
    });
    if (btn) {
        btn.classList.add('active');
        btn.style.background = '#1A1A1B';
        btn.style.color = '#FFFFFF';
        btn.style.border = '1px solid #F39200';
    }

    if (panelId === 'c7-sec-horas' && window.initC7HorasChart) setTimeout(window.initC7HorasChart, 100);
    if (panelId === 'c7-sec-proyeccion' && window.initC7ProyeccionChart) setTimeout(window.initC7ProyeccionChart, 100);
    if (panelId === 'c7-sec-desarrollo' && window.initC7EvalCharts) setTimeout(window.initC7EvalCharts, 100);
};

/* FILTRO DE TABLAS EN SUBSECCIÓN 1 */
window.filterC7Planta = function(type) {
    const t52 = document.getElementById('c7-tabla52-container');
    const t53 = document.getElementById('c7-tabla53-container');
    const bPres = document.getElementById('btnFilterPresencial');
    const bVirt = document.getElementById('btnFilterVirtual');
    const bAll = document.getElementById('btnFilterAll');

    [bPres, bVirt, bAll].forEach(b => {
        if (b) {
            b.style.background = '#F1F5F9';
            b.style.color = '#475569';
            b.style.border = '1px solid #CBD5E1';
        }
    });

    if (type === 'presencial') {
        if (t52) t52.style.display = 'block';
        if (t53) t53.style.display = 'none';
        if (bPres) { bPres.style.background = '#F39200'; bPres.style.color = '#FFFFFF'; bPres.style.border = 'none'; }
    } else if (type === 'virtual') {
        if (t52) t52.style.display = 'none';
        if (t53) t53.style.display = 'block';
        if (bVirt) { bVirt.style.background = '#2563EB'; bVirt.style.color = '#FFFFFF'; bVirt.style.border = 'none'; }
    } else {
        if (t52) t52.style.display = 'block';
        if (t53) t53.style.display = 'block';
        if (bAll) { bAll.style.background = '#1A1A1B'; bAll.style.color = '#FFFFFF'; bAll.style.border = 'none'; }
    }
};

/* INICIALIZADOR DE GRÁFICOS CHART.JS C7 */
window._c7Charts = window._c7Charts || {};

window.initC7HorasChart = function() {
    const ctx = document.getElementById('c7HorasChart');
    if (!ctx || typeof Chart === 'undefined') return;
    if (window._c7Charts.horas) window._c7Charts.horas.destroy();

    window._c7Charts.horas = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Docencia / Mediación AVA & Feedback',
                'Investigación & Semilleros',
                'Proyección Social / Extensión',
                'Gestión Académico-Admin. & AVA'
            ],
            datasets: [
                {
                    label: 'Tiempo Completo Presencial (40 h)',
                    data: [22, 8, 4, 6],
                    backgroundColor: 'rgba(243, 146, 0, 0.85)',
                    borderColor: '#F39200',
                    borderWidth: 1.5
                },
                {
                    label: 'Tiempo Completo Virtual (40 h)',
                    data: [24, 4, 2, 10], // 24h incluye las 13h de feedback Moodle 5.2
                    backgroundColor: 'rgba(37, 99, 235, 0.85)',
                    borderColor: '#2563EB',
                    borderWidth: 1.5
                },
                {
                    label: 'Medio Tiempo Virtual (20 h)',
                    data: [12, 2, 1, 5], // 12h docencia + 2h tut/inv + 1h ext + 5h gest
                    backgroundColor: 'rgba(217, 119, 6, 0.85)',
                    borderColor: '#D97706',
                    borderWidth: 1.5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10, weight: 'bold' } } },
                tooltip: {
                    callbacks: {
                        label: function(c) {
                            const total = c.datasetIndex === 2 ? 20 : 40;
                            return `${c.dataset.label}: ${c.raw} h semanales (${Math.round(c.raw / total * 100)}%)`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 26,
                    title: { display: true, text: 'Horas Semanales Dedicadas', font: { size: 10, weight: 'bold' } },
                    grid: { color: '#E2E8F0' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
};

window.initC7ProyeccionChart = function() {
    const ctx = document.getElementById('c7ProyeccionChart');
    if (!ctx || typeof Chart === 'undefined') return;
    if (window._c7Charts.proyeccion) window._c7Charts.proyeccion.destroy();

    const periodos = ['2026-1', '2026-2', '2027-1', '2027-2', '2028-1', '2028-2', '2029-1', '2029-2', '2030-1', '2030-2', '2031-1', '2031-2', '2032-1', '2032-2'];
    const totalEstudiantes = [140, 239, 324, 406, 473, 531, 552, 591, 624, 652, 675, 696, 714, 728];
    const totalDocentes = [6, 10, 13, 14, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const ratioGlobal = [23, 24, 25, 29, 34, 35, 35, 35, 35, 34, 34, 33, 32, 32];

    window._c7Charts.proyeccion = new Chart(ctx, {
        type: 'line',
        data: {
            labels: periodos,
            datasets: [
                {
                    label: 'Total Docentes Proyectados (MT + TC)',
                    data: totalDocentes,
                    borderColor: '#F39200',
                    backgroundColor: 'rgba(243, 146, 0, 0.15)',
                    borderWidth: 2.5,
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'yDocentes',
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Ratio Estudiantes por Docente (1:N)',
                    data: ratioGlobal,
                    borderColor: '#16A34A',
                    backgroundColor: '#16A34A',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.2,
                    yAxisID: 'yRatio',
                    pointRadius: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10, weight: 'bold' } } },
                tooltip: {
                    callbacks: {
                        afterBody: function(items) {
                            const idx = items[0].dataIndex;
                            return `Estudiantes Activos: ${totalEstudiantes[idx]} | Docentes: ${totalDocentes[idx]} (Ratio 1:${ratioGlobal[idx]})`;
                        }
                    }
                }
            },
            scales: {
                yDocentes: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    max: 26,
                    title: { display: true, text: 'Número Total de Docentes', font: { size: 10, weight: 'bold' } },
                    grid: { color: '#E2E8F0' }
                },
                yRatio: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    max: 45,
                    title: { display: true, text: 'Ratio Estudiantes por Docente', font: { size: 10, weight: 'bold' } },
                    grid: { display: false }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
};

window.initC7EvalCharts = function() {
    const ctxFuentes = document.getElementById('c7EvalFuentesChart');
    const ctxDims = document.getElementById('c7EvalDimensionesChart');
    if (typeof Chart === 'undefined') return;

    if (ctxFuentes) {
        if (window._c7Charts.fuentes) window._c7Charts.fuentes.destroy();
        window._c7Charts.fuentes = new Chart(ctxFuentes, {
            type: 'doughnut',
            data: {
                labels: ['Heteroevaluación (Estudiante)', 'Coevaluación (Coordinador)', 'Autoevaluación (Docente)'],
                datasets: [{
                    data: [50, 30, 20],
                    backgroundColor: ['#2563EB', '#F39200', '#16A34A'],
                    borderWidth: 2,
                    borderColor: '#FFFFFF'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } }
                },
                cutout: '62%'
            }
        });
    }

    if (ctxDims) {
        if (window._c7Charts.dims) window._c7Charts.dims.destroy();
        window._c7Charts.dims = new Chart(ctxDims, {
            type: 'doughnut',
            data: {
                labels: ['Pedagógico-Didáctico', 'Mediación Moodle 5.2 & Feedback', 'Investigación & Proyección', 'Administrativo'],
                datasets: [{
                    data: [35, 30, 20, 15],
                    backgroundColor: ['#F39200', '#2563EB', '#16A34A', '#9333EA'],
                    borderWidth: 2,
                    borderColor: '#FFFFFF'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } }
                },
                cutout: '62%'
            }
        });
    }
};

window.c7Init = function() {
    setTimeout(function() {
        if (window.switchC7Sub) {
            const firstBtn = document.querySelector('.c7-pill-btn');
            if (firstBtn) window.switchC7Sub('c7-sec-planta', firstBtn);
        }
    }, 150);
};
