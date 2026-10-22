/* =========================
   USUARIOS Y PERMISOS
   ========================= */
const USERS = [
    { email: 'admin.petcop@gmail.com', password: 'Admin#2026', code: 'ADM-001', name: 'Valeria Rojas', role: 'administrador' },
    { email: 'veterinario.petcop@gmail.com', password: 'Vet#2026', code: 'VET-001', name: 'Dr. Mateo Salazar', role: 'veterinario' },
    { email: 'recepcion.petcop@gmail.com', password: 'Recep#2026', code: 'REC-001', name: 'Camila Torres', role: 'recepcionista' }
];

const STAFF_HUS = ['hu01', 'hu02', 'hu03', 'hu04', 'hu05', 'hu06', 'hu07', 'hu08', 'hu09', 'hu10', 'hu11', 'hu12', 'hu13', 'hu14', 'hu15', 'hu16', 'hu17', 'hu18', 'hu21'];
const ADMIN_HUS = ['hu19', 'hu20', 'hu22', 'hu23', 'hu24'];

const HU = [
    ['hu01', 'user-plus', 'Registrar propietario', 'Registrar nuevos propietarios y sus datos de contacto.', 'Propietarios'],
    ['hu02', 'user-pen', 'Modificar propietario', 'Actualizar los datos de un propietario registrado.', 'Propietarios'],
    ['hu03', 'users', 'Consultar propietarios', 'Buscar y consultar información de propietarios.', 'Propietarios'],
    ['hu04', 'dog', 'Registrar mascota', 'Registrar una mascota y asociarla a su propietario.', 'Mascotas'],
    ['hu05', 'pen-line', 'Modificar mascota', 'Actualizar los datos de una mascota.', 'Mascotas'],
    ['hu06', 'search', 'Consultar mascotas', 'Buscar y consultar información de pacientes.', 'Mascotas'],
    ['hu07', 'calendar-plus', 'Registrar cita', 'Programar una nueva cita veterinaria.', 'Agenda'],
    ['hu08', 'calendar-cog', 'Modificar / cancelar cita', 'Modificar o cancelar citas existentes.', 'Agenda'],
    ['hu09', 'calendar', 'Consultar citas', 'Visualizar citas programadas y canceladas.', 'Agenda'],
    ['hu10', 'file-plus-2', 'Registrar atención', 'Registrar una consulta en el historial clínico.', 'Atención médica'],
    ['hu11', 'clipboard-list', 'Consultar historial', 'Consultar el expediente clínico de una mascota.', 'Atención médica'],
    ['hu12', 'activity', 'Registrar controles', 'Registrar peso y estado de salud.', 'Atención médica'],
    ['hu13', 'history', 'Consultar controles', 'Consultar controles médicos anteriores.', 'Atención médica'],
    ['hu14', 'bug-off', 'Registrar desparasitación', 'Registrar producto, dosis y próxima aplicación.', 'Prevención'],
    ['hu15', 'calendar-clock', 'Próxima desparasitación', 'Controlar próximas fechas de desparasitación.', 'Prevención'],
    ['hu16', 'pill', 'Registrar tratamiento', 'Registrar tratamientos y medicamentos indicados.', 'Tratamientos'],
    ['hu17', 'stethoscope', 'Consultar tratamientos', 'Consultar tratamientos asignados a una mascota.', 'Tratamientos'],
    ['hu18', 'link', 'Asociar tratamiento', 'Relacionar tratamientos con el historial clínico.', 'Tratamientos'],
    ['hu19', 'bar-chart-3', 'Reporte de consultas', 'Generar reporte de consultas realizadas.', 'Administración'],
    ['hu20', 'users-round', 'Pacientes atendidos', 'Consultar cantidad de pacientes atendidos.', 'Administración'],
    ['hu21', 'syringe', 'Consultar vacunas', 'Obtener información sobre vacunas registradas.', 'Prevención'],
    ['hu22', 'file-bar-chart', 'Reporte de tratamientos', 'Consultar reporte de tratamientos realizados.', 'Administración'],
    ['hu23', 'calendar-range', 'Periodo de reportes', 'Seleccionar periodo de tiempo para reportes.', 'Administración'],
    ['hu24', 'layout-dashboard', 'Reporte clínico global', 'Generar reportes clínicos globales de mascotas.', 'Administración']
];

let currentUser = null;

/* =========================
   DATOS DEMO
   ========================= */
let propietarios = [
    { id: 1, nombre: 'Carlos Mendoza', telefono: '71234567', direccion: 'Av. Las Palmas #45' },
    { id: 2, nombre: 'Ana María Gutiérrez', telefono: '78901234', direccion: 'Calle Murillo #890' }
];

let mascotas = [
    { id: 1, propietarioId: 1, nombre: 'Max', especie: 'Perro', raza: 'German Shepherd', edad: '3 años' },
    { id: 2, propietarioId: 2, nombre: 'Luna', especie: 'Gato', raza: 'Siamés', edad: '1.5 años' }
];

let citas = [
    { id: 1, mascotaId: 1, fecha: '2026-09-25', hora: '10:00', motivo: 'Chequeo general', estado: 'Programada' },
    { id: 2, mascotaId: 2, fecha: '2026-09-27', hora: '15:30', motivo: 'Vacuna anual', estado: 'Programada' }
];

let historiales = [
    {
        id: 1,
        mascotaId: 1,
        fecha: '2026-09-01',
        motivo: 'Tos leve',
        diagnostico: 'Resfrío canino',
        observaciones: 'Jarabe por 5 días',
        tratamientoIds: [1]
    }
];

let controles = [
    {
        id: 1,
        mascotaId: 1,
        fecha: '2026-09-05',
        peso: 12.5,
        estado: 'Bueno',
        observaciones: 'Apetito normal'
    }
];

let desparasitaciones = [
    {
        id: 1,
        mascotaId: 1,
        fecha: '2026-08-20',
        producto: 'Drontal',
        dosis: '1 tableta',
        proxima: '2026-11-20'
    }
];

let tratamientos = [
    {
        id: 1,
        mascotaId: 1,
        nombre: 'Jarabe Antitusivo',
        dosis: '5 ml',
        frecuencia: 'Cada 8 hrs',
        duracion: '5 días',
        instrucciones: 'Después de comer',
        fecha: '2026-09-01',
        historialId: 1
    }
];

let vacunas = [
    {
        id: 1,
        mascotaId: 1,
        nombre: 'Antirrábica',
        fecha: '2026-03-15',
        proxima: '2027-03-15',
        observaciones: 'Aplicación anual'
    },
    {
        id: 2,
        mascotaId: 2,
        nombre: 'Triple Felina',
        fecha: '2026-05-20',
        proxima: '2027-05-20',
        observaciones: 'Esquema anual'
    }
];

const icon = x => `<i data-lucide="${x}"></i>`;
const p = id => propietarios.find(x => x.id == id);
const m = id => mascotas.find(x => x.id == id);
const today = () => new Date().toISOString().slice(0, 10);
const nextId = arr => arr.length
    ? Math.max(...arr.map(x => Number(x.id) || 0)) + 1
    : 1;

/* =========================
   VALIDACIONES GENERALES
   ========================= */
function clearError(id) {
    const el = document.getElementById(id);
    const err = document.getElementById('err-' + id);

    if (el) el.classList.remove('error');

    if (err) {
        err.textContent = '';
        err.classList.remove('show');
    }
}

function setError(id, msg) {
    const el = document.getElementById(id);
    const err = document.getElementById('err-' + id);

    if (el) {
        el.classList.add('error');
        el.focus({ preventScroll: true });
    }

    if (err) {
        err.textContent = msg;
        err.classList.add('show');
    }
}

function cleanText(v) {
    return String(v || '').trim().replace(/\s+/g, ' ');
}

function validName(v) {
    return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{3,60}$/.test(cleanText(v));
}

function validPhone(v) {
    return /^[67]\d{7}$/.test(v);
}

function validEmail(v) {
    return /^[^\s@]+@gmail\.com$/i.test(v);
}

function isFutureOrToday(v) {
    return v >= today();
}

function validAge(v) {
    return /^(\d{1,2}(\.\d+)?\s*(años?|meses?))$/i.test(cleanText(v));
}

function validPositiveNumber(v, min, max) {
    const n = Number(v);
    return Number.isFinite(n) && n >= min && n <= max;
}

function dateOrder(start, end) {
    return start && end && start <= end;
}

function textLen(v, min, max) {
    const s = cleanText(v);
    return s.length >= min && s.length <= max;
}

function summary(formId, messages) {
    const box = document.querySelector(`#${formId} .validation-summary`);

    if (!box) return;

    if (messages.length) {
        box.innerHTML = '<b>Revisa lo siguiente:</b>• ' + messages.join('<br>• ');
        box.classList.add('show');
    } else {
        box.innerHTML = '';
        box.classList.remove('show');
    }
}

function resetErrors(formId) {
    const form = document.getElementById(formId);

    if (!form) return;

    form.querySelectorAll('.error').forEach(e => e.classList.remove('error'));

    form.querySelectorAll('.field-error').forEach(e => {
        e.textContent = '';
        e.classList.remove('show');
    });

    summary(formId, []);
}

function errorBlock(id) {
    return `<div id="err-${id}" class="field-error"></div>`;
}

function field(label, id, type = 'text', ph = '', hint = '') {
    return `<div class="group">
        <label>${label}</label>
        <input id="${id}" type="${type}" placeholder="${ph}">
        ${errorBlock(id)}
        ${hint ? `<div class="hint">${hint}</div>` : ''}
    </div>`;
}

function select(label, id, html, hint = '') {
    return `<div class="group">
        <label>${label}</label>
        <select id="${id}">${html}</select>
        ${errorBlock(id)}
        ${hint ? `<div class="hint">${hint}</div>` : ''}
    </div>`;
}

function textarea(label, id, ph = '') {
    return `<div class="group full">
        <label>${label}</label>
        <textarea id="${id}" rows="3" placeholder="${ph}"></textarea>
        ${errorBlock(id)}
    </div>`;
}

function formShell(id, content, button) {
    return `<form id="${id}" novalidate>
        <div class="validation-summary"></div>
        ${content}
        <div class="actions">
            <button type="submit" class="btn primary">
                ${icon('save')}${button}
            </button>
        </div>
    </form>`;
}

function optP() {
    return `<option value="">-- Seleccionar propietario --</option>` +
        propietarios.map(x =>
            `<option value="${x.id}">${x.nombre} · ${x.telefono}</option>`
        ).join('');
}

function optM() {
    return `<option value="">-- Seleccionar mascota --</option>` +
        mascotas.map(x =>
            `<option value="${x.id}">${x.nombre} · ${x.especie} · ${p(x.propietarioId)?.nombre || 'Sin dueño'}</option>`
        ).join('');
}

/* =========================
   LOGIN
   ========================= */
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();

    ['loginEmail', 'loginPassword', 'loginCode'].forEach(clearError);

    const errors = [];

    const email = cleanText(
        document.getElementById('loginEmail').value
    ).toLowerCase();

    const password = document.getElementById('loginPassword').value;

    const code = cleanText(
        document.getElementById('loginCode').value
    ).toUpperCase();

    if (!email) {
        setError('loginEmail', 'Ingresa tu correo institucional.');
        errors.push('Falta el correo institucional.');
    } else if (!validEmail(email)) {
        setError(
            'loginEmail',
            'Debe ser un correo Gmail válido, por ejemplo: usuario@gmail.com'
        );
        errors.push('El correo no tiene un formato Gmail válido.');
    }

    if (!password) {
        setError('loginPassword', 'Ingresa tu contraseña.');
        errors.push('Falta la contraseña.');
    } else if (password.length < 6) {
        setError(
            'loginPassword',
            'La contraseña debe tener al menos 6 caracteres.'
        );
        errors.push('La contraseña es demasiado corta.');
    }

    if (!code) {
        setError('loginCode', 'Ingresa tu código de personal.');
        errors.push('Falta el código de personal.');
    } else if (!/^(ADM|VET|REC)-\d{3}$/.test(code)) {
        setError(
            'loginCode',
            'Formato válido: ADM-001, VET-001 o REC-001.'
        );
        errors.push('El código de personal tiene un formato incorrecto.');
    }

    const box = document.getElementById('loginSummary');

    if (errors.length) {
        box.innerHTML =
            '<b>No podemos iniciar sesión:</b>• ' +
            errors.join('<br>• ');

        box.classList.add('show');
        return;
    }

    const user = USERS.find(
        x =>
            x.email === email &&
            x.password === password &&
            x.code === code
    );

    if (!user) {
        box.innerHTML =
            '<b>Credenciales incorrectas.</b>' +
            'Verifica que el correo, contraseña y código pertenezcan a la misma cuenta.';

        box.classList.add('show');
        return;
    }

    box.classList.remove('show');

    currentUser = user;

    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    buildApp();

    toast(
        `Bienvenido/a ${user.name}. Perfil: ${capitalize(user.role)}.`
    );
});

function logout() {
    currentUser = null;

    document.getElementById('app').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');

    document.getElementById('loginForm').reset();
    document.getElementById('loginSummary').classList.remove('show');

    lucide.createIcons();
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/* =========================
   APP Y PERMISOS
   ========================= */
function allowedHUs() {
    if (!currentUser) return [];

    return currentUser.role === 'administrador'
        ? ADMIN_HUS
        : STAFF_HUS;
}

function buildNav() {
    const nav = document.getElementById('nav');

    nav.innerHTML = '';

    let last = '';

    HU
        .filter(h => allowedHUs().includes(h[0]))
        .forEach(h => {
            if (h[4] !== last) {
                nav.insertAdjacentHTML(
                    'beforeend',
                    `<div class="sec">${h[4]}</div>`
                );

                last = h[4];
            }

            nav.insertAdjacentHTML(
                'beforeend',
                `<div class="nav-item" data-id="${h[0]}" onclick="switchTab('${h[0]}')">
                    ${icon(h[1])}
                    <span>${h[2]}</span>
                    <span class="hu">${h[0].toUpperCase().replace('HU', 'HU-')}</span>
                </div>`
            );
        });
}

function module(id, body) {
    const h = HU.find(x => x[0] === id);

    return `<section id="${id}" class="module">
        <div class="card">
            <div class="card-title">
                ${icon(h[1])}
                ${h[0].toUpperCase().replace('HU', 'HU-')}: ${h[2]}
            </div>
            ${body}
        </div>
    </section>`;
}

function buildApp() {
    document.getElementById('sideName').textContent =
        currentUser.name;

    document.getElementById('sideRole').textContent =
        capitalize(currentUser.role);

    document.getElementById('sideAvatar').textContent =
        currentUser.name
            .split(' ')
            .map(x => x[0])
            .slice(0, 2)
            .join('');

    document.getElementById('headerRole').textContent =
        `Perfil: ${capitalize(currentUser.role)}`;

    buildNav();
    buildModules();

    const first = allowedHUs()[0];

    switchTab(first);

    lucide.createIcons();
}

function switchTab(id) {
    if (!allowedHUs().includes(id)) {
        toast(
            'Tu perfil no tiene permiso para acceder a este módulo.',
            true
        );
        return;
    }

    document
        .querySelectorAll('.module')
        .forEach(x => x.classList.remove('active'));

    document
        .querySelectorAll('.nav-item')
        .forEach(x =>
            x.classList.toggle(
                'active',
                x.dataset.id === id
            )
        );

    document.getElementById(id)?.classList.add('active');

    const h = HU.find(x => x[0] === id);

    document.getElementById('title').innerHTML =
        icon(h[1]) +
        ' ' +
        h[0].toUpperCase().replace('HU', 'HU-') +
        ': ' +
        h[2];

    document.getElementById('desc').textContent = h[3];

    refresh();

    lucide.createIcons();
}

/* =========================
   CONSTRUCCIÓN DE LAS 24 HU
   ========================= */
function buildModules() {
    let C = '';

    C += module(
        'hu01',
        formShell(
            'formP',
            `<div class="grid">
                ${field(
                    'Nombre completo *',
                    'pnom',
                    'text',
                    'Ej. Carlos Mendoza',
                    'Solo letras. Entre 3 y 60 caracteres.'
                )}
                ${field(
                    'Teléfono *',
                    'ptel',
                    'tel',
                    'Ej. 71234567',
                    '8 dígitos y debe comenzar con 6 o 7.'
                )}
                ${field(
                    'Dirección *',
                    'pdir',
                    'text',
                    'Ej. Av. Las Palmas #45',
                    'Mínimo 5 caracteres.'
                )}
            </div>`,
            'Registrar propietario'
        ) +
        `<div class="card">
            <div class="card-title">
                ${icon('users')}Propietarios registrados
            </div>
            <div class="table" id="p-table"></div>
        </div>`
    );

    C += module(
        'hu02',
        formShell(
            'formEP',
            `<div class="grid">
                ${select(
                    'Propietario *',
                    'epid',
                    optP()
                )}
                ${field(
                    'Nombre completo *',
                    'epnom'
                )}
                ${field(
                    'Teléfono *',
                    'eptel',
                    'tel'
                )}
                ${field(
                    'Dirección *',
                    'epdir'
                )}
            </div>`,
            'Guardar cambios'
        )
    );

    C += module(
        'hu03',
        `${field(
            'Buscar propietario',
            'pq',
            'text',
            'Nombre o teléfono...'
        )}
        <div class="table" id="pc-table"></div>`
    );

    C += module(
        'hu04',
        formShell(
            'formM',
            `<div class="grid">
                ${select(
                    'Propietario *',
                    'mprop',
                    optP()
                )}
                ${field(
                    'Nombre de la mascota *',
                    'mnom',
                    'text',
                    'Ej. Max',
                    'Solo letras y espacios.'
                )}
                ${select(
                    'Especie *',
                    'mesp',
                    '<option value="">-- Seleccionar especie --</option><option>Perro</option><option>Gato</option><option>Ave</option><option>Otro</option>'
                )}
                ${field(
                    'Raza *',
                    'mraza',
                    'text',
                    'Ej. Labrador'
                )}
                ${field(
                    'Edad *',
                    'medad',
                    'text',
                    'Ej. 2 años',
                    'Formato: 2 años o 8 meses.'
                )}
            </div>`,
            'Registrar mascota'
        ) +
        `<div class="card">
            <div class="card-title">
                ${icon('list')}Mascotas registradas
            </div>
            <div class="table" id="m-table"></div>
        </div>`
    );

    C += module(
        'hu05',
        formShell(
            'formEM',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'emid',
                    optM()
                )}
                ${field(
                    'Nombre *',
                    'emnom'
                )}
                ${select(
                    'Especie *',
                    'emesp',
                    '<option value="">-- Seleccionar --</option><option>Perro</option><option>Gato</option><option>Ave</option><option>Otro</option>'
                )}
                ${field(
                    'Raza *',
                    'emraza'
                )}
                ${field(
                    'Edad *',
                    'emedad'
                )}
                ${select(
                    'Propietario *',
                    'emprop',
                    optP()
                )}
            </div>`,
            'Guardar cambios'
        )
    );

    C += module(
        'hu06',
        `<div class="grid">
            ${field(
                'Buscar mascota',
                'mq',
                'text',
                'Nombre, raza o propietario...'
            )}
            ${select(
                'Especie',
                'mespf',
                '<option value="">Todas</option><option>Perro</option><option>Gato</option><option>Ave</option><option>Otro</option>'
            )}
        </div>
        <div class="table" id="mc-table"></div>`
    );

    C += module(
        'hu07',
        formShell(
            'formC',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'cm',
                    optM()
                )}
                ${field(
                    'Fecha de cita *',
                    'cf',
                    'date',
                    '',
                    'No se permiten fechas pasadas.'
                )}
                ${field(
                    'Hora *',
                    'ch',
                    'time'
                )}
                ${field(
                    'Motivo *',
                    'cmot',
                    'text',
                    'Ej. Control general',
                    'Mínimo 5 caracteres.'
                )}
            </div>`,
            'Agendar cita'
        )
    );

    C += module(
        'hu08',
        `<div id="formEC">
            <div class="validation-summary"></div>
            <div class="grid">
                ${select(
                    'Cita *',
                    'ecid',
                    ''
                )}
                ${field(
                    'Nueva fecha *',
                    'ecf',
                    'date'
                )}
                ${field(
                    'Nueva hora *',
                    'ech',
                    'time'
                )}
                ${field(
                    'Motivo *',
                    'ecmot'
                )}
            </div>
            <div class="actions">
                <button class="btn primary" onclick="editC()">
                    ${icon('save')}Guardar cambios
                </button>
                <button class="btn danger" onclick="cancelC()">
                    ${icon('ban')}Cancelar cita
                </button>
            </div>
        </div>`
    );

    C += module(
        'hu09',
        `<div class="grid">
            ${field(
                'Filtrar por fecha',
                'cqf',
                'date'
            )}
            ${select(
                'Mascota',
                'cqm',
                optM()
            )}
            ${select(
                'Estado',
                'cqe',
                '<option value="">Todos</option><option>Programada</option><option>Cancelada</option>'
            )}
        </div>
        <div class="table" id="c-table"></div>`
    );

    C += module(
        'hu10',
        formShell(
            'formH',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'hm',
                    optM()
                )}
                ${field(
                    'Fecha de atención *',
                    'hf',
                    'date'
                )}
                ${field(
                    'Motivo *',
                    'hmo'
                )}
                ${field(
                    'Diagnóstico *',
                    'hdiag'
                )}
                ${textarea(
                    'Observaciones',
                    'hobs',
                    'Indicaciones, evolución o recomendaciones...'
                )}
            </div>`,
            'Guardar atención'
        )
    );

    C += module(
        'hu11',
        `${select(
            'Mascota *',
            'histm',
            optM()
        )}
        <div class="timeline" id="hist-table">
            <div class="empty">Seleccione una mascota.</div>
        </div>`
    );

    C += module(
        'hu12',
        formShell(
            'formCtrl',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'ctrlm',
                    optM()
                )}
                ${field(
                    'Fecha del control *',
                    'ctrlf',
                    'date'
                )}
                ${field(
                    'Peso en kg *',
                    'ctrlp',
                    'number',
                    'Ej. 12.5',
                    'Debe ser mayor a 0 y menor o igual a 200 kg.'
                )}
                ${select(
                    'Estado de salud *',
                    'ctrle',
                    '<option value="">-- Seleccionar --</option><option>Excelente</option><option>Bueno</option><option>Regular</option><option>Delicado</option>'
                )}
                ${field(
                    'Observaciones',
                    'ctrlo'
                )}
            </div>`,
            'Guardar control'
        )
    );

    C += module(
        'hu13',
        `${select(
            'Mascota *',
            'ccm',
            optM()
        )}
        <div class="table" id="ctrl-table"></div>`
    );

    C += module(
        'hu14',
        formShell(
            'formD',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'dm',
                    optM()
                )}
                ${field(
                    'Fecha aplicada *',
                    'df',
                    'date'
                )}
                ${field(
                    'Producto *',
                    'dp'
                )}
                ${field(
                    'Dosis *',
                    'dd'
                )}
                ${field(
                    'Próxima aplicación *',
                    'dnext',
                    'date',
                    '',
                    'Debe ser posterior a la fecha aplicada.'
                )}
            </div>`,
            'Registrar desparasitación'
        )
    );

    C += module(
        'hu15',
        `${select(
            'Mascota *',
            'pdm',
            optM()
        )}
        <div class="table" id="d-table"></div>`
    );

    C += module(
        'hu16',
        formShell(
            'formT',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'tm',
                    optM()
                )}
                ${field(
                    'Tratamiento / medicamento *',
                    'tn'
                )}
                ${field(
                    'Dosis *',
                    'td'
                )}
                ${field(
                    'Frecuencia *',
                    'tf'
                )}
                ${field(
                    'Duración *',
                    'tdu'
                )}
                ${field(
                    'Instrucciones',
                    'ti'
                )}
            </div>`,
            'Registrar tratamiento'
        )
    );

    C += module(
        'hu17',
        `${select(
            'Mascota *',
            'ctm',
            optM()
        )}
        <div class="table" id="t-table"></div>`
    );

    C += module(
        'hu18',
        formShell(
            'formLinkT',
            `<div class="grid">
                ${select(
                    'Mascota *',
                    'atm',
                    optM()
                )}
                ${select(
                    'Tratamiento *',
                    'atid',
                    ''
                )}
                ${textarea(
                    'Nota de asociación',
                    'atnote',
                    'Ej. Asociado a la consulta del día...'
                )}
            </div>`,
            'Asociar al historial'
        )
    );

    C += module(
        'hu19',
        `<div id="formR19">
            <div class="validation-summary"></div>
            <div class="grid">
                ${field(
                    'Desde *',
                    'r19i',
                    'date'
                )}
                ${field(
                    'Hasta *',
                    'r19f',
                    'date'
                )}
            </div>
            <div class="actions">
                <button class="btn primary" onclick="report19()">
                    ${icon('bar-chart-3')}Generar reporte
                </button>
            </div>
        </div>
        <div class="table" id="r19table"></div>`
    );

    C += module(
        'hu20',
        `<div id="formR20">
            <div class="validation-summary"></div>
            <div class="grid">
                ${field(
                    'Desde *',
                    'r20i',
                    'date'
                )}
                ${field(
                    'Hasta *',
                    'r20f',
                    'date'
                )}
            </div>
            <div class="actions">
                <button class="btn primary" onclick="report20()">
                    Consultar
                </button>
            </div>
        </div>

        <div class="stats">
            <div class="stat">
                <div class="stat-icon">
                    ${icon('dog')}
                </div>
                <div>
                    <div class="num" id="r20n">0</div>
                    <div class="lbl">Pacientes atendidos</div>
                </div>
            </div>

            <div class="stat">
                <div class="stat-icon">
                    ${icon('file-text')}
                </div>
                <div>
                    <div class="num" id="r20a">0</div>
                    <div class="lbl">Atenciones</div>
                </div>
            </div>
        </div>`
    );

    C += module(
        'hu21',
        `${select(
            'Mascota *',
            'pvm',
            optM()
        )}
        <div class="table" id="v-table"></div>`
    );

    C += module(
        'hu22',
        `<div id="formR22">
            <div class="validation-summary"></div>
            <div class="grid">
                ${field(
                    'Desde *',
                    'r22i',
                    'date'
                )}
                ${field(
                    'Hasta *',
                    'r22f',
                    'date'
                )}
            </div>
            <div class="actions">
                <button class="btn primary" onclick="report22()">
                    Consultar tratamientos
                </button>
            </div>
        </div>

        <div class="table" id="r22table"></div>`
    );

    C += module(
        'hu23',
        `<div id="formR23">
            <div class="validation-summary"></div>
            <div class="grid">
                ${field(
                    'Fecha inicial *',
                    'r23i',
                    'date'
                )}
                ${field(
                    'Fecha final *',
                    'r23f',
                    'date'
                )}
            </div>
            <div class="actions">
                <button class="btn primary" onclick="applyPeriod()">
                    ${icon('calendar-range')}Aplicar periodo
                </button>
            </div>
        </div>

        <div class="stats">
            <div class="stat">
                <div class="stat-icon">
                    ${icon('calendar')}
                </div>
                <div>
                    <div class="num" id="periodLabel">—</div>
                    <div class="lbl">Periodo seleccionado</div>
                </div>
            </div>
        </div>`
    );

    C += module(
        'hu24',
        `<div id="formR24">
            <div class="validation-summary"></div>
            <div class="grid">
                ${field(
                    'Desde *',
                    'r24i',
                    'date'
                )}
                ${field(
                    'Hasta *',
                    'r24f',
                    'date'
                )}
            </div>
            <div class="actions">
                <button class="btn primary" onclick="report24()">
                    ${icon('layout-dashboard')}Generar reporte global
                </button>
            </div>
        </div>

        <div class="stats" id="globalstats"></div>
        <div class="table" id="globaltable"></div>`
    );

    document.getElementById('content').innerHTML = C;

    wireEvents();
    setDefaultDates();
}

function setDefaultDates() {
    document
        .querySelectorAll('input[type="date"]')
        .forEach(x => {
            if (!x.value) x.value = today();
        });
}

/* =========================
   TOAST
   ========================= */
function toast(msg, err = false, warn = false) {
    const d = document.createElement('div');

    d.className =
        'toast' +
        (err ? ' err' : warn ? ' warn' : '');

    d.innerHTML =
        icon(
            err
                ? 'alert-circle'
                : warn
                    ? 'triangle-alert'
                    : 'check-circle'
        ) +
        `<div>${msg}</div>`;

    document
        .getElementById('toastbox')
        .appendChild(d);

    lucide.createIcons();

    setTimeout(() => d.remove(), 3800);
}

/* =========================
   REFRESH Y TABLAS
   ========================= */
function refresh() {
    refreshSelects();
    tables();
    renderAll();

    lucide.createIcons();
}

function refreshSelects() {
    const propIds = [
        'mprop',
        'emprop',
        'epid'
    ];

    const mascIds = [
        'cm',
        'cqm',
        'hm',
        'histm',
        'ctrlm',
        'ccm',
        'dm',
        'pdm',
        'tm',
        'ctm',
        'atm',
        'pvm'
    ];

    propIds.forEach(id => {
        const e = document.getElementById(id);

        if (e) {
            const v = e.value;

            e.innerHTML = optP();
            e.value = v;
        }
    });

    mascIds.forEach(id => {
        const e = document.getElementById(id);

        if (e) {
            const v = e.value;

            e.innerHTML = optM();
            e.value = v;
        }
    });

    const emid = document.getElementById('emid');

    if (emid) {
        const v = emid.value;

        emid.innerHTML =
            '<option value="">-- Seleccionar mascota --</option>' +
            mascotas
                .map(x =>
                    `<option value="${x.id}">${x.nombre}</option>`
                )
                .join('');

        emid.value = v;
    }

    const ec = document.getElementById('ecid');

    if (ec) {
        const v = ec.value;

        ec.innerHTML =
            '<option value="">-- Seleccionar cita --</option>' +
            citas
                .map(c =>
                    `<option value="${c.id}">
                        ${c.fecha} ${c.hora} · ${m(c.mascotaId)?.nombre} · ${c.estado}
                    </option>`
                )
                .join('');

        ec.value = v;
    }

    const at = document.getElementById('atid');

    if (at) {
        const mid =
            document.getElementById('atm')?.value;

        const v = at.value;

        at.innerHTML =
            '<option value="">-- Seleccionar tratamiento --</option>' +
            tratamientos
                .filter(t => t.mascotaId == mid)
                .map(t =>
                    `<option value="${t.id}">
                        ${t.nombre} · ${t.dosis}
                    </option>`
                )
                .join('');

        at.value = v;
    }
}

function tables() {
    const pTable =
        document.getElementById('p-table');

    const pcTable =
        document.getElementById('pc-table');

    if (pTable || pcTable) {
        const q =
            (
                document.getElementById('pq')?.value ||
                ''
            ).toLowerCase();

        const arr =
            propietarios.filter(x =>
                (
                    x.nombre +
                    ' ' +
                    x.telefono
                )
                    .toLowerCase()
                    .includes(q)
            );

        const rows =
            arr.map(x =>
                `<tr>
                    <td>#${x.id}</td>
                    <td><b>${x.nombre}</b></td>
                    <td>${x.telefono}</td>
                    <td>${x.direccion}</td>
                    <td>${mascotas.filter(mm => mm.propietarioId == x.id).length}</td>
                </tr>`
            ).join('') ||
            '<tr><td colspan="5" class="empty">Sin resultados.</td></tr>';

        const html =
            `<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Mascotas</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>`;

        if (pTable) pTable.innerHTML = html;

        if (pcTable) pcTable.innerHTML = html;
    }

    const mTable =
        document.getElementById('m-table');

    const mcTable =
        document.getElementById('mc-table');

    if (mTable || mcTable) {
        const q =
            (
                document.getElementById('mq')?.value ||
                ''
            ).toLowerCase();

        const es =
            document.getElementById('mespf')?.value ||
            '';

        const arr =
            mascotas.filter(x =>
                (
                    x.nombre +
                    ' ' +
                    x.raza +
                    ' ' +
                    (p(x.propietarioId)?.nombre || '')
                )
                    .toLowerCase()
                    .includes(q) &&
                (!es || x.especie === es)
            );

        const rows =
            arr.map(x =>
                `<tr>
                    <td>#${x.id}</td>
                    <td><b>${x.nombre}</b></td>
                    <td><span class="badge teal">${x.especie}</span></td>
                    <td>${x.raza}</td>
                    <td>${x.edad}</td>
                    <td>${p(x.propietarioId)?.nombre || ''}</td>
                </tr>`
            ).join('') ||
            '<tr><td colspan="6" class="empty">Sin resultados.</td></tr>';

        const html =
            `<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mascota</th>
                        <th>Especie</th>
                        <th>Raza</th>
                        <th>Edad</th>
                        <th>Propietario</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>`;

        if (mTable) mTable.innerHTML = html;

        if (mcTable) mcTable.innerHTML = html;
    }
}

/* =========================
   CRUD + VALIDACIONES
   ========================= */
function wireEvents() {
    document.getElementById('formP')
        ?.addEventListener('submit', addP);

    document.getElementById('formEP')
        ?.addEventListener('submit', editP);

    document.getElementById('formM')
        ?.addEventListener('submit', addM);

    document.getElementById('formEM')
        ?.addEventListener('submit', editM);

    document.getElementById('formC')
        ?.addEventListener('submit', addC);

    document.getElementById('formH')
        ?.addEventListener('submit', addH);

    document.getElementById('formCtrl')
        ?.addEventListener('submit', addCtrl);

    document.getElementById('formD')
        ?.addEventListener('submit', addD);

    document.getElementById('formT')
        ?.addEventListener('submit', addT);

    document.getElementById('formLinkT')
        ?.addEventListener('submit', linkT);

    document.addEventListener('input', e => {
        if (
            [
                'pq',
                'mq',
                'mespf',
                'cqf',
                'cqm',
                'cqe',
                'histm',
                'ccm',
                'pdm',
                'ctm',
                'pvm'
            ].includes(e.target.id)
        ) {
            refresh();
        }
    });

    document.addEventListener('change', e => {
        if (e.target.id === 'epid') loadP();

        if (e.target.id === 'emid') loadM();

        if (e.target.id === 'ecid') loadC();

        if (e.target.id === 'atm') refreshSelects();

        if (
            [
                'cqf',
                'cqm',
                'cqe',
                'histm',
                'ccm',
                'pdm',
                'ctm',
                'pvm'
            ].includes(e.target.id)
        ) {
            renderAll();
        }
    });
}

function addP(e) {
    e.preventDefault();

    resetErrors('formP');

    const errs = [];

    const nombre =
        cleanText(pval('pnom'));

    const tel =
        pval('ptel');

    const dir =
        cleanText(pval('pdir'));

    if (!nombre) {
        setError(
            'pnom',
            'El nombre es obligatorio.'
        );
        errs.push(
            'Ingresa el nombre del propietario.'
        );
    } else if (!validName(nombre)) {
        setError(
            'pnom',
            'Usa solo letras, espacios, apóstrofes o guiones.'
        );
        errs.push(
            'El nombre contiene caracteres no permitidos.'
        );
    }

    if (!tel) {
        setError(
            'ptel',
            'El teléfono es obligatorio.'
        );
        errs.push(
            'Ingresa un teléfono.'
        );
    } else if (!validPhone(tel)) {
        setError(
            'ptel',
            'Debe tener 8 dígitos y comenzar con 6 o 7.'
        );
        errs.push(
            'El teléfono no tiene formato boliviano válido.'
        );
    } else if (
        propietarios.some(
            x => x.telefono === tel
        )
    ) {
        setError(
            'ptel',
            'Este teléfono ya está registrado.'
        );
        errs.push(
            'Ya existe un propietario con ese teléfono.'
        );
    }

    if (!dir) {
        setError(
            'pdir',
            'La dirección es obligatoria.'
        );
        errs.push(
            'Ingresa una dirección.'
        );
    } else if (!textLen(dir, 5, 100)) {
        setError(
            'pdir',
            'La dirección debe tener entre 5 y 100 caracteres.'
        );
        errs.push(
            'La dirección es demasiado corta o demasiado larga.'
        );
    }

    summary('formP', errs);

    if (errs.length) return;

    propietarios.push({
        id: nextId(propietarios),
        nombre,
        telefono: tel,
        direccion: dir
    });

    e.target.reset();

    refresh();

    toast(
        'Propietario registrado correctamente.'
    );
}

function loadP() {
    const x = p(pval('epid'));

    if (!x) return;

    epnom.value = x.nombre;
    eptel.value = x.telefono;
    epdir.value = x.direccion;
}

function editP(e) {
    e.preventDefault();

    resetErrors('formEP');

    const errs = [];

    const id = pval('epid');

    const x = p(id);

    const nombre =
        cleanText(pval('epnom'));

    const tel =
        pval('eptel');

    const dir =
        cleanText(pval('epdir'));

    if (!x) {
        setError(
            'epid',
            'Selecciona un propietario.'
        );
        errs.push(
            'No seleccionaste propietario.'
        );
    }

    if (!validName(nombre)) {
        setError(
            'epnom',
            'Nombre inválido.'
        );
        errs.push(
            'Corrige el nombre.'
        );
    }

    if (!validPhone(tel)) {
        setError(
            'eptel',
            'Debe tener 8 dígitos y comenzar con 6 o 7.'
        );
        errs.push(
            'Corrige el teléfono.'
        );
    }

    if (
        propietarios.some(
            y => y.id != id &&
                y.telefono === tel
        )
    ) {
        setError(
            'eptel',
            'Otro propietario ya usa este teléfono.'
        );
        errs.push(
            'El teléfono está duplicado.'
        );
    }

    if (!textLen(dir, 5, 100)) {
        setError(
            'epdir',
            'Dirección inválida.'
        );
        errs.push(
            'Corrige la dirección.'
        );
    }

    summary('formEP', errs);

    if (errs.length) return;

    Object.assign(x, {
        nombre,
        telefono: tel,
        direccion: dir
    });

    refresh();

    toast(
        'Propietario actualizado.'
    );
}

function addM(e) {
    e.preventDefault();

    resetErrors('formM');

    const errs = [];

    const prop = +pval('mprop');
    const nombre = cleanText(pval('mnom'));
    const esp = pval('mesp');
    const raza = cleanText(pval('mraza'));
    const edad = cleanText(pval('medad'));

    if (!prop) {
        setError(
            'mprop',
            'Selecciona un propietario.'
        );
        errs.push(
            'La mascota debe tener propietario.'
        );
    }

    if (!validName(nombre)) {
        setError(
            'mnom',
            'Nombre inválido.'
        );
        errs.push(
            'Corrige el nombre de la mascota.'
        );
    }

    if (!esp) {
        setError(
            'mesp',
            'Selecciona una especie.'
        );
        errs.push(
            'Falta la especie.'
        );
    }

    if (!textLen(raza, 2, 40)) {
        setError(
            'mraza',
            'La raza debe tener entre 2 y 40 caracteres.'
        );
        errs.push(
            'Corrige la raza.'
        );
    }

    if (!validAge(edad)) {
        setError(
            'medad',
            'Usa un formato como "2 años" o "8 meses".'
        );
        errs.push(
            'La edad no tiene un formato válido.'
        );
    }

    summary('formM', errs);

    if (errs.length) return;

    mascotas.push({
        id: nextId(mascotas),
        propietarioId: prop,
        nombre,
        especie: esp,
        raza,
        edad
    });

    e.target.reset();

    refresh();

    toast(
        'Mascota registrada y asociada.'
    );
}

function loadM() {
    const x = m(pval('emid'));

    if (!x) return;

    emnom.value = x.nombre;
    emesp.value = x.especie;
    emraza.value = x.raza;
    emedad.value = x.edad;
    emprop.value = x.propietarioId;
}

function editM(e) {
    e.preventDefault();

    resetErrors('formEM');

    const errs = [];

    const id = pval('emid');

    const x = m(id);

    if (!x) {
        setError(
            'emid',
            'Selecciona una mascota.'
        );
        errs.push(
            'No seleccionaste mascota.'
        );
    }

    const nom =
        cleanText(pval('emnom'));

    const esp =
        pval('emesp');

    const raza =
        cleanText(pval('emraza'));

    const edad =
        cleanText(pval('emedad'));

    const prop =
        +pval('emprop');

    if (!validName(nom)) {
        setError(
            'emnom',
            'Nombre inválido.'
        );
        errs.push(
            'Corrige el nombre.'
        );
    }

    if (!esp) {
        setError(
            'emesp',
            'Selecciona especie.'
        );
        errs.push(
            'Falta especie.'
        );
    }

    if (!textLen(raza, 2, 40)) {
        setError(
            'emraza',
            'Raza inválida.'
        );
        errs.push(
            'Corrige la raza.'
        );
    }

    if (!validAge(edad)) {
        setError(
            'emedad',
            'Formato: 2 años o 8 meses.'
        );
        errs.push(
            'Corrige la edad.'
        );
    }

    if (!prop) {
        setError(
            'emprop',
            'Selecciona propietario.'
        );
        errs.push(
            'Falta propietario.'
        );
    }

    summary('formEM', errs);

    if (errs.length) return;

    Object.assign(x, {
        nombre: nom,
        especie: esp,
        raza,
        edad,
        propietarioId: prop
    });

    refresh();

    toast(
        'Mascota actualizada.'
    );
}

function addC(e) {
    e.preventDefault();

    resetErrors('formC');

    const errs = [];

    const mid = +pval('cm');
    const fecha = pval('cf');
    const hora = pval('ch');
    const mot = cleanText(pval('cmot'));

    if (!mid) {
        setError(
            'cm',
            'Selecciona una mascota.'
        );
        errs.push(
            'Falta la mascota.'
        );
    }

    if (!fecha) {
        setError(
            'cf',
            'Selecciona una fecha.'
        );
        errs.push(
            'Falta la fecha.'
        );
    } else if (!isFutureOrToday(fecha)) {
        setError(
            'cf',
            'No puedes agendar una cita en el pasado.'
        );
        errs.push(
            'La fecha de la cita ya pasó.'
        );
    }

    if (!hora) {
        setError(
            'ch',
            'Selecciona una hora.'
        );
        errs.push(
            'Falta la hora.'
        );
    }

    if (!textLen(mot, 5, 120)) {
        setError(
            'cmot',
            'El motivo debe tener entre 5 y 120 caracteres.'
        );
        errs.push(
            'El motivo no es suficientemente descriptivo.'
        );
    }

    if (
        fecha &&
        hora &&
        citas.some(
            x =>
                x.fecha === fecha &&
                x.hora === hora &&
                x.estado === 'Programada'
        )
    ) {
        setError(
            'ch',
            'Ese horario ya está ocupado.'
        );

        errs.push(
            'Existe otra cita programada a la misma fecha y hora.'
        );
    }

    summary('formC', errs);

    if (errs.length) return;

    citas.push({
        id: nextId(citas),
        mascotaId: mid,
        fecha,
        hora,
        motivo: mot,
        estado: 'Programada'
    });

    e.target.reset();

    refresh();

    toast(
        'Cita agendada correctamente.'
    );
}

function loadC() {
    const x =
        citas.find(
            c => c.id == pval('ecid')
        );

    if (!x) return;

    ecf.value = x.fecha;
    ech.value = x.hora;
    ecmot.value = x.motivo;
}

function editC() {
    resetErrors('formEC');

    const errs = [];

    const id = pval('ecid');

    const x =
        citas.find(
            c => c.id == id
        );

    if (!x) {
        setError(
            'ecid',
            'Selecciona una cita.'
        );

        errs.push(
            'No seleccionaste una cita.'
        );
    }

    const fecha =
        pval('ecf');

    const hora =
        pval('ech');

    const mot =
        cleanText(pval('ecmot'));

    if (
        !fecha ||
        !isFutureOrToday(fecha)
    ) {
        setError(
            'ecf',
            'Selecciona hoy o una fecha futura.'
        );

        errs.push(
            'La fecha es inválida.'
        );
    }

    if (!hora) {
        setError(
            'ech',
            'La hora es obligatoria.'
        );

        errs.push(
            'Falta la hora.'
        );
    }

    if (!textLen(mot, 5, 120)) {
        setError(
            'ecmot',
            'Motivo inválido.'
        );

        errs.push(
            'Corrige el motivo.'
        );
    }

    if (
        x &&
        citas.some(
            c =>
                c.id != x.id &&
                c.estado === 'Programada' &&
                c.fecha === fecha &&
                c.hora === hora
        )
    ) {
        setError(
            'ech',
            'Horario ocupado por otra cita.'
        );

        errs.push(
            'Existe un cruce de horario.'
        );
    }

    summary('formEC', errs);

    if (errs.length) return;

    Object.assign(x, {
        fecha,
        hora,
        motivo: mot
    });

    refresh();

    toast(
        'Cita modificada.'
    );
}

function cancelC() {
    const x =
        citas.find(
            c => c.id == pval('ecid')
        );

    if (!x) {
        return toast(
            'Selecciona una cita antes de cancelar.',
            true
        );
    }

    if (x.estado === 'Cancelada') {
        return toast(
            'Esta cita ya se encuentra cancelada.',
            true
        );
    }

    if (
        !confirm(
            `¿Cancelar la cita de ${m(x.mascotaId)?.nombre} del ${x.fecha} a las ${x.hora}?`
        )
    ) {
        return;
    }

    x.estado = 'Cancelada';

    refresh();

    toast(
        'Cita cancelada.'
    );
}

function addH(e) {
    e.preventDefault();

    resetErrors('formH');

    const errs = [];

    const mid = +pval('hm');
    const fecha = pval('hf');
    const mot = cleanText(pval('hmo'));
    const diag = cleanText(pval('hdiag'));
    const obs = cleanText(pval('hobs'));

    if (!mid) {
        setError(
            'hm',
            'Selecciona una mascota.'
        );
        errs.push(
            'Falta la mascota.'
        );
    }

    if (!fecha) {
        setError(
            'hf',
            'Selecciona una fecha.'
        );
        errs.push(
            'Falta la fecha.'
        );
    } else if (fecha > today()) {
        setError(
            'hf',
            'La atención no puede registrarse en una fecha futura.'
        );
        errs.push(
            'La fecha de atención está en el futuro.'
        );
    }

    if (!textLen(mot, 3, 120)) {
        setError(
            'hmo',
            'Motivo demasiado corto.'
        );
        errs.push(
            'Describe mejor el motivo.'
        );
    }

    if (!textLen(diag, 3, 200)) {
        setError(
            'hdiag',
            'Diagnóstico demasiado corto.'
        );
        errs.push(
            'Describe el diagnóstico.'
        );
    }

    if (obs.length > 500) {
        setError(
            'hobs',
            'Máximo 500 caracteres.'
        );
        errs.push(
            'Las observaciones son demasiado largas.'
        );
    }

    summary('formH', errs);

    if (errs.length) return;

    historiales.push({
        id: nextId(historiales),
        mascotaId: mid,
        fecha,
        motivo: mot,
        diagnostico: diag,
        observaciones: obs,
        tratamientoIds: []
    });

    e.target.reset();

    refresh();

    toast(
        'Atención registrada en historial.'
    );
}

function addCtrl(e) {
    e.preventDefault();

    resetErrors('formCtrl');

    const errs = [];

    const mid = +pval('ctrlm');
    const fecha = pval('ctrlf');
    const peso = pval('ctrlp');
    const estado = pval('ctrle');
    const obs = cleanText(pval('ctrlo'));

    if (!mid) {
        setError(
            'ctrlm',
            'Selecciona una mascota.'
        );
        errs.push(
            'Falta la mascota.'
        );
    }

    if (!fecha || fecha > today()) {
        setError(
            'ctrlf',
            'La fecha debe ser hoy o anterior.'
        );
        errs.push(
            'Fecha de control inválida.'
        );
    }

    if (
        !validPositiveNumber(
            peso,
            0.1,
            200
        )
    ) {
        setError(
            'ctrlp',
            'El peso debe estar entre 0.1 y 200 kg.'
        );
        errs.push(
            'Peso fuera de rango.'
        );
    }

    if (!estado) {
        setError(
            'ctrle',
            'Selecciona el estado de salud.'
        );
        errs.push(
            'Falta el estado de salud.'
        );
    }

    summary('formCtrl', errs);

    if (errs.length) return;

    controles.push({
        id: nextId(controles),
        mascotaId: mid,
        fecha,
        peso: Number(peso),
        estado,
        observaciones: obs
    });

    e.target.reset();

    refresh();

    toast(
        'Control médico registrado.'
    );
}

function addD(e) {
    e.preventDefault();

    resetErrors('formD');

    const errs = [];

    const mid = +pval('dm');
    const fecha = pval('df');
    const prod = cleanText(pval('dp'));
    const dosis = cleanText(pval('dd'));
    const prox = pval('dnext');

    if (!mid) {
        setError(
            'dm',
            'Selecciona una mascota.'
        );
        errs.push(
            'Falta la mascota.'
        );
    }

    if (!fecha || fecha > today()) {
        setError(
            'df',
            'La aplicación debe ser hoy o una fecha anterior.'
        );
        errs.push(
            'Fecha aplicada inválida.'
        );
    }

    if (!textLen(prod, 2, 80)) {
        setError(
            'dp',
            'Ingresa el nombre del producto.'
        );
        errs.push(
            'Producto inválido.'
        );
    }

    if (!textLen(dosis, 2, 50)) {
        setError(
            'dd',
            'Ingresa una dosis válida.'
        );
        errs.push(
            'Dosis inválida.'
        );
    }

    if (!prox) {
        setError(
            'dnext',
            'Selecciona la próxima fecha.'
        );
        errs.push(
            'Falta la próxima aplicación.'
        );
    } else if (
        fecha &&
        prox <= fecha
    ) {
        setError(
            'dnext',
            'Debe ser posterior a la fecha aplicada.'
        );
        errs.push(
            'La próxima aplicación debe ser futura respecto de la aplicación actual.'
        );
    }

    summary('formD', errs);

    if (errs.length) return;

    desparasitaciones.push({
        id: nextId(desparasitaciones),
        mascotaId: mid,
        fecha,
        producto: prod,
        dosis,
        proxima: prox
    });

    e.target.reset();

    refresh();

    toast(
        'Desparasitación registrada.'
    );
}

function addT(e) {
    e.preventDefault();

    resetErrors('formT');

    const errs = [];

    const mid = +pval('tm');
    const nombre = cleanText(pval('tn'));
    const dosis = cleanText(pval('td'));
    const frec = cleanText(pval('tf'));
    const dur = cleanText(pval('tdu'));
    const inst = cleanText(pval('ti'));

    if (!mid) {
        setError(
            'tm',
            'Selecciona una mascota.'
        );
        errs.push(
            'Falta la mascota.'
        );
    }

    if (!textLen(nombre, 2, 100)) {
        setError(
            'tn',
            'Ingresa un tratamiento o medicamento válido.'
        );
        errs.push(
            'Tratamiento inválido.'
        );
    }

    if (!textLen(dosis, 2, 60)) {
        setError(
            'td',
            'Ingresa una dosis comprensible.'
        );
        errs.push(
            'Dosis inválida.'
        );
    }

    if (!textLen(frec, 3, 60)) {
        setError(
            'tf',
            'Ejemplo: Cada 8 horas.'
        );
        errs.push(
            'Frecuencia inválida.'
        );
    }

    if (!textLen(dur, 2, 50)) {
        setError(
            'tdu',
            'Ejemplo: 5 días.'
        );
        errs.push(
            'Duración inválida.'
        );
    }

    summary('formT', errs);

    if (errs.length) return;

    tratamientos.push({
        id: nextId(tratamientos),
        mascotaId: mid,
        nombre,
        dosis,
        frecuencia: frec,
        duracion: dur,
        instrucciones: inst,
        fecha: today(),
        historialId: null
    });

    e.target.reset();

    refresh();

    toast(
        'Tratamiento registrado.'
    );
}

function linkT(e) {
    e.preventDefault();

    resetErrors('formLinkT');

    const errs = [];

    const mid = +pval('atm');
    const tid = +pval('atid');

    if (!mid) {
        setError(
            'atm',
            'Selecciona una mascota.'
        );
        errs.push(
            'Falta la mascota.'
        );
    }

    if (!tid) {
        setError(
            'atid',
            'Selecciona un tratamiento.'
        );
        errs.push(
            'Falta el tratamiento.'
        );
    }

    const h =
        historiales
            .filter(
                x => x.mascotaId === mid
            )
            .sort(
                (a, b) =>
                    b.fecha.localeCompare(a.fecha)
            )[0];

    if (mid && !h) {
        errs.push(
            'La mascota no tiene historial clínico. Registra una atención primero.'
        );
    }

    summary('formLinkT', errs);

    if (errs.length) return;

    h.tratamientoIds =
        h.tratamientoIds || [];

    if (
        h.tratamientoIds.includes(tid)
    ) {
        return toast(
            'Ese tratamiento ya está asociado al historial.',
            true
        );
    }

    h.tratamientoIds.push(tid);

    toast(
        'Tratamiento asociado al historial.'
    );

    refresh();
}

/* =========================
   RENDER
   ========================= */
function pval(id) {
    return document
        .getElementById(id)
        ?.value
        ?.trim() || '';
}

function range(a, i, f, k) {
    return a.filter(
        x =>
            (!i || x[k] >= i) &&
            (!f || x[k] <= f)
    );
}

function renderAll() {
    const hist =
        document.getElementById('hist-table');

    if (hist) {
        const id =
            pval('histm');

        hist.innerHTML =
            id
                ? (
                    historiales
                        .filter(
                            x => x.mascotaId == id
                        )
                        .sort(
                            (a, b) =>
                                b.fecha.localeCompare(a.fecha)
                        )
                        .map(
                            h =>
                                `<div class="record">
                                    <b>${h.fecha} · ${h.motivo}</b>
                                    <p><b>Diagnóstico:</b> ${h.diagnostico}</p>
                                    <p><b>Observaciones:</b> ${h.observaciones || '-'}</p>
                                    <p><b>Tratamientos:</b> ${
                                        (h.tratamientoIds || [])
                                            .map(
                                                t =>
                                                    tratamientos.find(
                                                        z => z.id == t
                                                    )?.nombre
                                            )
                                            .filter(Boolean)
                                            .join(', ') ||
                                        'Ninguno'
                                    }</p>
                                </div>`
                        )
                        .join('') ||
                    '<div class="empty">No existen atenciones.</div>'
                )
                : '<div class="empty">Seleccione una mascota.</div>';
    }

    const ct =
        document.getElementById('c-table');

    if (ct) {
        const arr =
            citas.filter(
                x =>
                    (!pval('cqf') ||
                        x.fecha === pval('cqf')) &&
                    (!pval('cqm') ||
                        x.mascotaId == pval('cqm')) &&
                    (!pval('cqe') ||
                        x.estado === pval('cqe'))
            );

        ct.innerHTML =
            `<table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Mascota</th>
                        <th>Propietario</th>
                        <th>Motivo</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        arr
                            .map(
                                x =>
                                    `<tr>
                                        <td>${x.fecha}</td>
                                        <td>${x.hora}</td>
                                        <td>${m(x.mascotaId)?.nombre}</td>
                                        <td>${p(m(x.mascotaId)?.propietarioId)?.nombre}</td>
                                        <td>${x.motivo}</td>
                                        <td>
                                            <span class="badge ${
                                                x.estado === 'Programada'
                                                    ? 'teal'
                                                    : 'red'
                                            }">
                                                ${x.estado}
                                            </span>
                                        </td>
                                    </tr>`
                            )
                            .join('') ||
                        '<tr><td colspan="6" class="empty">Sin citas.</td></tr>'
                    }
                </tbody>
            </table>`;
    }

    const ctrl =
        document.getElementById('ctrl-table');

    if (ctrl) {
        const arr =
            controles.filter(
                x =>
                    !pval('ccm') ||
                    x.mascotaId == pval('ccm')
            );

        ctrl.innerHTML =
            `<table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Peso</th>
                        <th>Estado</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        arr
                            .map(
                                x =>
                                    `<tr>
                                        <td>${x.fecha}</td>
                                        <td>${x.peso} kg</td>
                                        <td>
                                            <span class="badge teal">
                                                ${x.estado}
                                            </span>
                                        </td>
                                        <td>${x.observaciones || '-'}</td>
                                    </tr>`
                            )
                            .join('') ||
                        '<tr><td colspan="4" class="empty">Sin controles.</td></tr>'
                    }
                </tbody>
            </table>`;
    }

    const dt =
        document.getElementById('d-table');

    if (dt) {
        const arr =
            desparasitaciones.filter(
                x =>
                    !pval('pdm') ||
                    x.mascotaId == pval('pdm')
            );

        dt.innerHTML =
            `<table>
                <thead>
                    <tr>
                        <th>Aplicación</th>
                        <th>Producto</th>
                        <th>Dosis</th>
                        <th>Próxima</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        arr
                            .map(
                                x =>
                                    `<tr>
                                        <td>${x.fecha}</td>
                                        <td>${x.producto}</td>
                                        <td>${x.dosis}</td>
                                        <td>${x.proxima}</td>
                                        <td>
                                            <span class="badge ${
                                                x.proxima < today()
                                                    ? 'red'
                                                    : 'teal'
                                            }">
                                                ${
                                                    x.proxima < today()
                                                        ? 'Vencida'
                                                        : 'Pendiente'
                                                }
                                            </span>
                                        </td>
                                    </tr>`
                            )
                            .join('') ||
                        '<tr><td colspan="5" class="empty">Sin registros.</td></tr>'
                    }
                </tbody>
            </table>`;
    }

    const tt =
        document.getElementById('t-table');

    if (tt) {
        const arr =
            tratamientos.filter(
                x =>
                    !pval('ctm') ||
                    x.mascotaId == pval('ctm')
            );

        tt.innerHTML =
            `<table>
                <thead>
                    <tr>
                        <th>Tratamiento</th>
                        <th>Dosis</th>
                        <th>Frecuencia</th>
                        <th>Duración</th>
                        <th>Instrucciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        arr
                            .map(
                                x =>
                                    `<tr>
                                        <td><b>${x.nombre}</b></td>
                                        <td>${x.dosis}</td>
                                        <td>${x.frecuencia}</td>
                                        <td>${x.duracion}</td>
                                        <td>${x.instrucciones || '-'}</td>
                                    </tr>`
                            )
                            .join('') ||
                        '<tr><td colspan="5" class="empty">Sin tratamientos.</td></tr>'
                    }
                </tbody>
            </table>`;
    }

    const vt =
        document.getElementById('v-table');

    if (vt) {
        const arr =
            vacunas.filter(
                x =>
                    !pval('pvm') ||
                    x.mascotaId == pval('pvm')
            );

        vt.innerHTML =
            `<table>
                <thead>
                    <tr>
                        <th>Vacuna</th>
                        <th>Aplicación</th>
                        <th>Próxima dosis</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        arr
                            .map(
                                x =>
                                    `<tr>
                                        <td><b>${x.nombre}</b></td>
                                        <td>${x.fecha}</td>
                                        <td>${x.proxima}</td>
                                        <td>${x.observaciones || '-'}</td>
                                    </tr>`
                            )
                            .join('') ||
                        '<tr><td colspan="4" class="empty">No hay vacunas registradas para esta mascota.</td></tr>'
                    }
                </tbody>
            </table>`;
    }
}

/* =========================
   REPORTES + VALIDACIÓN
   ========================= */
function validatePeriod(
    formId,
    startId,
    endId
) {
    resetErrors(formId);

    const errs = [];

    const i = pval(startId);
    const f = pval(endId);

    if (!i) {
        setError(
            startId,
            'Selecciona la fecha inicial.'
        );

        errs.push(
            'Falta la fecha inicial.'
        );
    }

    if (!f) {
        setError(
            endId,
            'Selecciona la fecha final.'
        );

        errs.push(
            'Falta la fecha final.'
        );
    }

    if (i && f && i > f) {
        setError(
            startId,
            'La fecha inicial no puede ser posterior a la final.'
        );

        setError(
            endId,
            'Debe ser igual o posterior a la fecha inicial.'
        );

        errs.push(
            'El periodo de fechas está invertido.'
        );
    }

    summary(formId, errs);

    return errs.length === 0;
}

function report19() {
    if (
        !validatePeriod(
            'formR19',
            'r19i',
            'r19f'
        )
    ) {
        return;
    }

    const a =
        range(
            historiales,
            pval('r19i'),
            pval('r19f'),
            'fecha'
        );

    r19table.innerHTML =
        `<table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Mascota</th>
                    <th>Propietario</th>
                    <th>Motivo</th>
                    <th>Diagnóstico</th>
                </tr>
            </thead>
            <tbody>
                ${
                    a
                        .map(x => {
                            const mm =
                                m(x.mascotaId);

                            return `<tr>
                                <td>${x.fecha}</td>
                                <td>${mm?.nombre}</td>
                                <td>${p(mm?.propietarioId)?.nombre}</td>
                                <td>${x.motivo}</td>
                                <td>${x.diagnostico}</td>
                            </tr>`;
                        })
                        .join('') ||
                    '<tr><td colspan="5" class="empty">No existen consultas en ese periodo.</td></tr>'
                }
            </tbody>
        </table>`;

    toast(
        'Reporte de consultas generado.'
    );
}

function report20() {
    if (
        !validatePeriod(
            'formR20',
            'r20i',
            'r20f'
        )
    ) {
        return;
    }

    const a =
        range(
            historiales,
            pval('r20i'),
            pval('r20f'),
            'fecha'
        );

    r20n.textContent =
        new Set(
            a.map(x => x.mascotaId)
        ).size;

    r20a.textContent =
        a.length;

    toast(
        'Indicadores actualizados.'
    );
}

function report22() {
    if (
        !validatePeriod(
            'formR22',
            'r22i',
            'r22f'
        )
    ) {
        return;
    }

    const a =
        range(
            tratamientos,
            pval('r22i'),
            pval('r22f'),
            'fecha'
        );

    r22table.innerHTML =
        `<table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Mascota</th>
                    <th>Tratamiento</th>
                    <th>Dosis</th>
                    <th>Frecuencia</th>
                    <th>Duración</th>
                </tr>
            </thead>
            <tbody>
                ${
                    a
                        .map(
                            x =>
                                `<tr>
                                    <td>${x.fecha}</td>
                                    <td>${m(x.mascotaId)?.nombre}</td>
                                    <td>${x.nombre}</td>
                                    <td>${x.dosis}</td>
                                    <td>${x.frecuencia}</td>
                                    <td>${x.duracion}</td>
                                </tr>`
                        )
                        .join('') ||
                    '<tr><td colspan="6" class="empty">No existen tratamientos en ese periodo.</td></tr>'
                }
            </tbody>
        </table>`;

    toast(
        'Reporte de tratamientos generado.'
    );
}

function applyPeriod() {
    if (
        !validatePeriod(
            'formR23',
            'r23i',
            'r23f'
        )
    ) {
        return;
    }

    periodLabel.textContent =
        `${pval('r23i')} → ${pval('r23f')}`;

    toast(
        'Periodo seleccionado correctamente.'
    );
}

function report24() {
    if (
        !validatePeriod(
            'formR24',
            'r24i',
            'r24f'
        )
    ) {
        return;
    }

    const i = pval('r24i');
    const f = pval('r24f');

    const c =
        a => range(
            a,
            i,
            f,
            'fecha'
        );

    globalstats.innerHTML =
        [
            [
                'dog',
                mascotas.length,
                'Mascotas'
            ],
            [
                'users',
                propietarios.length,
                'Propietarios'
            ],
            [
                'calendar-check',
                c(citas).length,
                'Citas'
            ],
            [
                'file-text',
                c(historiales).length,
                'Atenciones'
            ],
            [
                'pill',
                c(tratamientos).length,
                'Tratamientos'
            ],
            [
                'syringe',
                c(vacunas).length,
                'Vacunas'
            ]
        ]
            .map(
                x =>
                    `<div class="stat">
                        <div class="stat-icon">
                            ${icon(x[0])}
                        </div>
                        <div>
                            <div class="num">${x[1]}</div>
                            <div class="lbl">${x[2]}</div>
                        </div>
                    </div>`
            )
            .join('');

    globaltable.innerHTML =
        `<table>
            <thead>
                <tr>
                    <th>Mascota</th>
                    <th>Propietario</th>
                    <th>Atenciones</th>
                    <th>Vacunas</th>
                    <th>Tratamientos</th>
                    <th>Controles</th>
                </tr>
            </thead>
            <tbody>
                ${
                    mascotas
                        .map(
                            x =>
                                `<tr>
                                    <td><b>${x.nombre}</b></td>
                                    <td>${p(x.propietarioId)?.nombre}</td>
                                    <td>${c(historiales).filter(h => h.mascotaId == x.id).length}</td>
                                    <td>${c(vacunas).filter(v => v.mascotaId == x.id).length}</td>
                                    <td>${c(tratamientos).filter(t => t.mascotaId == x.id).length}</td>
                                    <td>${range(controles, i, f, 'fecha').filter(t => t.mascotaId == x.id).length}</td>
                                </tr>`
                        )
                        .join('')
                }
            </tbody>
        </table>`;

    toast(
        'Reporte clínico global generado.'
    );
}

lucide.createIcons();