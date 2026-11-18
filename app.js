/* =========================================================
   APP.JS – Lógica principal de la Plataforma de Sustentación
   Registro Calificado Nuevo · Marketing Digital · TO (RD32850)
   ========================================================= */

const PWD_HASH = "TO2026";

// ---- Conditions Info ----
const condInfo = [
    {
        id: 'inst',
        title: 'Presentación Institucional',
        icon: 'fas fa-university',
        badge: 'INSTITUCIONAL',
        slideLabel: 'Identidad TO · 8 Secciones',
        desc: 'Identidad corporativa, PEI, evolución histórica, convenios (+70 activos), oferta académica (17 programas), bienestar e infraestructura física.',
        img: 'assets/sedes_institucionales.png'
    },
    {
        id: 'virtual',
        title: 'Sistema de Educación Virtual',
        icon: 'fas fa-laptop-code',
        badge: 'VIRTUAL',
        slideLabel: 'Ecosistema & Modelo Pedagógico',
        desc: 'Modelo pedagógico Formación en Contextos de Aplicación, 4 dimensiones, Diseño Instruccional ADDIE y Campus Virtual Moodle TO.',
        img: 'assets/virtual_card_cover.png'
    },
    {
        id: 'bienestar',
        title: 'Bienestar Institucional',
        icon: 'fas fa-heartbeat',
        badge: 'INSTITUCIONAL',
        slideLabel: 'Modelo Integral · 15 Diapositivas',
        desc: 'Estrategia articulada para la permanencia y formación integral, caracterización presencial y virtual, y 16h semestrales.',
        img: 'assets/bienestar/slide_1.png'
    },
    {
        id: 'c1',
        title: '1. Denominación del Programa',
        icon: 'fas fa-id-badge',
        desc: 'Ficha técnica oficial Registro Único (144 cr, 8 sem, 280 cupos), Acuerdo CS 03/2026, CINE 0414, perfiles y 10 rasgos distintivos.',
        img: 'assets/sedes_institucionales.png'
    },
    {
        id: 'c2',
        title: '2. Justificación del Programa',
        icon: 'fas fa-chart-line',
        desc: 'Pertinencia internacional (AMA, DMI, CIM), nacional SNIES (N=39 / N=89), observatorio geoespacial, MiPymes Santander (96,4%) y CCCE ($145,4B).',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'c3',
        title: '3. Aspectos Curriculares',
        icon: 'fas fa-sitemap',
        desc: 'Malla curricular oficial (144 cr · 8 sem · 48 asignaturas), 3 áreas (Disciplinar 73%, Transversal 21%, Electiva 6%), 4 componentes y 26 RAP.',
        img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'c4',
        title: '4. Organización de Actividades Académicas',
        icon: 'fas fa-cogs',
        desc: 'Créditos por modalidad (1:2 Presencial y 1:3 Virtual), 18 aulas Moodle 100% virtualizadas, credenciales Sala CONACES y matriz de evaluación.',
        img: 'assets/virtual_card_cover.png'
    },
    {
        id: 'c5',
        title: '5. Investigación, Innovación y Creación',
        icon: 'fas fa-flask',
        desc: 'Grupo COLLEGIUM, Semillero en Marketing Digital e Innovación, 3 líneas y 15 temáticas oficiales (Tabla 54), ruta formativa y TIC.',
        img: 'assets/investigacion_card.jpg'
    },
    {
        id: 'c6',
        title: '6. Relación con el Sector Externo',
        icon: 'fas fa-handshake',
        desc: 'Consultorio CIDRE en transformación digital, alianza CUEES Santander, Educación Continua, convenios y Plan Estratégico a 7 años (Tabla 56).',
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'c7',
        title: '7. Personal Docente',
        icon: 'fas fa-chalkboard-teacher',
        desc: 'Planta inicial diferenciada (5 TC Presencial + 5 TC y 1 MT Virtual = 11 docentes), escalamiento a 23 docentes por modalidad (2026-2032) y relación 1:23.',
        img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'c8',
        title: '8. Medios Educativos',
        icon: 'fas fa-laptop-code',
        desc: 'Biblioteca digital e-Libro (98.222 títulos), +5.000 ejemplares físicos de Marketing y TIC, Moodle AWS, Adobe Creative Cloud, Microsoft 365 y laboratorios.',
        img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'c9',
        title: '9. Infraestructura Física y Tecnológica',
        icon: 'fas fa-building',
        desc: 'Capacidad instalada en Bucaramanga: Sedes A, B y C (7.679,25 m², 68 espacios, 1.905 puestos), fibra óptica dedicada Claro y servidores AWS/Azure.',
        img: 'assets/sedes_institucionales.png'
    }
];

// Limpieza proactiva de cualquier persistencia previa para garantizar que siempre se solicite la contraseña
try {
    localStorage.removeItem("to_marketing_digital_auth_2026");
    sessionStorage.removeItem("to_marketing_digital_auth_2026");
} catch(e) {}

// ---- Auth Functions (Idéntico a Administración de Empresas) ----
function checkAuth() {
    const input = document.getElementById('pwdInput');
    const pwd = (input ? input.value : '').trim().toUpperCase();
    const err = document.getElementById('pwdError');
    if (pwd === PWD_HASH || pwd === "TO") {
        const gw = document.getElementById('authGateway');
        if (gw) {
            gw.style.opacity = '0';
            setTimeout(() => {
                gw.style.display = 'none';
                const main = document.getElementById('mainApp');
                if (main) main.classList.remove('hidden');
            }, 500);
        }
    } else {
        if (err) {
            err.classList.remove('hidden');
            setTimeout(() => err.classList.add('hidden'), 4000);
        }
    }
}

function logout() {
    const input = document.getElementById('pwdInput');
    if (input) input.value = '';
    const main = document.getElementById('mainApp');
    if (main) main.classList.add('hidden');
    const gw = document.getElementById('authGateway');
    if (gw) {
        gw.style.display = 'flex';
        gw.style.opacity = '1';
    }
}

// ---- Build Condition Cards ----
document.addEventListener("DOMContentLoaded", () => {
    // Asegurar compuerta de seguridad visible al inicio
    const gw = document.getElementById('authGateway');
    const main = document.getElementById('mainApp');
    if (gw) {
        gw.style.display = 'flex';
        gw.style.opacity = '1';
    }
    if (main) {
        main.classList.add('hidden');
    }
    const pwdInput = document.getElementById('pwdInput');
    if (pwdInput) {
        pwdInput.value = '';
        setTimeout(() => pwdInput.focus(), 250);
    }

    const grid = document.getElementById('gridCards');
    if (!grid) return;

    grid.innerHTML = condInfo.map(c => `
        <div class="cond-card" onclick="openPresentation('${c.id}', '${c.title.replace(/'/g, "\\'")}')">
            <div class="cond-card-img" style="${c.id === 'inst' ? 'background: linear-gradient(135deg, #1A1A1B 0%, #1A1A1B 100%);' : ''}">
                <img src="${c.img}" alt="${c.title}" onerror="this.parentElement.outerHTML='<div class=\\'cond-card-icon-bg\\'><i class=\\'${c.icon}\\'></i></div>';">
                <div class="cond-card-badge" style="${c.id === 'inst' ? 'background:#1A1A1B; color:#FFFFFF;' : (c.id === 'virtual' || c.id === 'bienestar') ? 'background:#111827; color:#F39200; border:1px solid rgba(243,146,0,0.5);' : ''}">${c.badge || ('Condición ' + c.id.replace('c',''))}</div>
            </div>
            <div class="cond-card-body">
                <h4 class="cond-card-title">${c.title}</h4>
                <p class="cond-card-desc">${c.desc}</p>
                <div class="cond-card-action" style="${(c.id === 'inst' || c.id === 'virtual' || c.id === 'bienestar') ? 'color:#F39200; font-weight:800;' : ''}"><i class="${c.icon}"></i> ${c.slideLabel || 'Ver Sustentación'}</div>
            </div>
        </div>
    `).join('');
});

// ---- Presentation Viewer ----
let currentConditionId = 'c1';

function openPresentation(id, title) {
    currentConditionId = id;
    const viewer = document.getElementById('presentationViewer');
    const cond = condInfo.find(c => c.id === id);

    // Toggle Cinema Focus Mode for Bienestar (primer plano absoluto)
    if (id === 'bienestar') {
        viewer.classList.add('viewer-cinema-focus');
    } else {
        viewer.classList.remove('viewer-cinema-focus');
    }

    document.getElementById('viewerTitle').innerText = title || cond?.title || id;

    if (id === 'inst') {
        document.getElementById('slideCategory').innerText = `IDENTIDAD Y GOBERNANZA · CORPORACIÓN ESCUELA TECNOLÓGICA DEL ORIENTE`;
    } else if (id === 'virtual') {
        document.getElementById('slideCategory').innerText = `ECOSISTEMA DIGITAL · SISTEMA DE EDUCACIÓN VIRTUAL TO`;
    } else if (id === 'bienestar') {
        document.getElementById('slideCategory').innerText = `BIENESTAR INSTITUCIONAL · MODELO INTEGRAL DE PERMANENCIA TO`;
    } else {
        document.getElementById('slideCategory').innerText = `CONDICIÓN ${id.replace('c','')} · REGISTRO CALIFICADO NUEVO (REGISTRO ÚNICO · CASO RD32850)`;
    }
    document.getElementById('slideTitle').innerText = cond?.title || title;

    // Update counter
    const idx = condInfo.findIndex(c => c.id === id);
    document.getElementById('slideCounter').innerText = idx >= 0 ? idx + 1 : '-';
    document.getElementById('slideTotalCounter').innerText = condInfo.length;

    // Load content
    if (window.SECTIONS && window.SECTIONS[id]) {
        document.getElementById('slideBody').innerHTML = window.SECTIONS[id];
    } else {
        document.getElementById('slideBody').innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="${cond?.icon || 'fas fa-spinner'}" style="font-size:3rem; color:#F39200; margin-bottom:16px; display:block;"></i>
                <h3 style="color:#1A1A1B; font-family:'Montserrat',sans-serif; margin-bottom:8px;">Contenido en Preparación</h3>
                <p style="color:#6B6B6B; font-size:0.9rem;">Consulte el Documento Maestro oficial radicado en SACES.</p>
            </div>`;
    }

    // Show viewer
    viewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Scroll to top
    const scroller = document.getElementById('scrollContainer');
    if (scroller) scroller.scrollTop = 0;

    // Run init scripts
    runSlideScripts(id);
}

function nextSlide() {
    const idx = condInfo.findIndex(c => c.id === currentConditionId);
    if (idx >= 0 && idx < condInfo.length - 1) {
        openPresentation(condInfo[idx + 1].id, condInfo[idx + 1].title);
    }
}

function prevSlide() {
    const idx = condInfo.findIndex(c => c.id === currentConditionId);
    if (idx > 0) {
        openPresentation(condInfo[idx - 1].id, condInfo[idx - 1].title);
    }
}

function closePresentation() {
    const viewer = document.getElementById('presentationViewer');
    viewer.classList.add('hidden');
    viewer.classList.remove('viewer-cinema-focus');
    document.body.style.overflow = 'auto';
}

function runSlideScripts(id) {
    [100, 300, 600, 1000].forEach(delay => {
        setTimeout(() => {
            if (id === 'inst' && window.instInit) window.instInit();
            if (id === 'virtual' && window.virtualInit) window.virtualInit();
            if (id === 'bienestar' && window.bienestarInit) window.bienestarInit();
            if (id === 'c1' && window.c1Init) window.c1Init();
            if (id === 'c2' && window.c2Init) window.c2Init();
            if (id === 'c3' && window.c3Init) window.c3Init();
            if (id === 'c4' && window.c4Init) window.c4Init();
            if (id === 'c5' && window.c5Init) window.c5Init();
            if (id === 'c6' && window.c6Init) window.c6Init();
            if (id === 'c7' && window.c7Init) window.c7Init();
            if (id === 'c8' && window.c8Init) window.c8Init();
            if (id === 'c9' && window.c9Init) window.c9Init();
        }, delay);
    });
}

// Window resize handler for Leaflet
window.addEventListener('resize', () => {
    if (window._leafletMapInstance) {
        window._leafletMapInstance.invalidateSize();
    }
});

// Keyboard navigation
document.addEventListener('keydown', e => {
    const viewer = document.getElementById('presentationViewer');
    if (viewer && !viewer.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') closePresentation();
    }
});

// Tab switching utility
window.switchTab = function(tabGroupId, tabId) {
    const group = document.getElementById(tabGroupId);
    if (group) {
        group.querySelectorAll('.tab-btn, .c3-main-tab-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = group.querySelector(`[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    const targetPanel = document.getElementById(tabId);
    if (!targetPanel) return;

    const parent = targetPanel.parentElement;
    if (parent) {
        Array.from(parent.children).forEach(child => {
            if (child.classList && child.classList.contains('tab-panel')) {
                child.classList.remove('active');
                child.style.display = 'none';
            }
        });
    }

    targetPanel.classList.add('active');
    targetPanel.style.display = 'block';
};
