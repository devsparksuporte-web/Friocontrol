// Configuração do Supabase
const SUPABASE_URL = 'https://rukvaidffgqqoxplqiyx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1a3ZhaWRmZmdxcW94cGxxaXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MzM3MTYsImV4cCI6MjA3NzQwOTcxNn0.JCpTcUw6n_POIowuS_kvIjz-VHeo7wnsrzcBaoRlpvI';

// Inicializar o cliente Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Estado da aplicação
let currentUser = null;
let currentCompany = null;
let userProfile = null;
let editingCompanyId = null;
let editingUserId = null;

// Elementos da DOM
const loginScreen = document.getElementById('loginScreen');
const appScreen = document.getElementById('appScreen');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const currentCompanyElement = document.getElementById('currentCompany');
const userNameElement = document.getElementById('userName');
const userRoleElement = document.getElementById('userRole');
const loginAlert = document.getElementById('loginAlert');
const loginText = document.getElementById('loginText');
const loginSpinner = document.getElementById('loginSpinner');

// Função para configurar navegação por hash
function setupHashNavigation() {
    // Verificar hash atual na URL
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
        const tabElement = document.querySelector(`[data-tab="${currentHash}"]`);
        if (tabElement) {
            tabElement.click();
        }
    }

    // Configurar evento para mudanças no hash
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.replace('#', '');
        const tabElement = document.querySelector(`[data-tab="${hash}"]`);
        if (tabElement) {
            tabElement.click();
        }
    });

    // Configurar clicks nos links para atualizar o hash
    document.querySelectorAll('.sidebar-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                window.location.hash = href;
            }
        });
    });
}

// ... o restante do código permanece igual ...
