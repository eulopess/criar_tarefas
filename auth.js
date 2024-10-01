import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// Configurações do Firebase
const configuracaoFirebase = {
    apiKey: "AIzaSyA0rzfnnPImwNPb4UWt7N1Vam5hFEO86r4",
    authDomain: "notas-3a5a3.firebaseapp.com",
    projectId: "notas-3a5a3",
    storageBucket: "notas-3a5a3.appspot.com",
    messagingSenderId: "897167666943",
    appId: "1:897167666943:web:7943369237b969baa8a6ca"
};
// Inicialize o Firebase
const app = initializeApp(configuracaoFirebase);
const auth = getAuth(app);
// Função de login
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "tarefas.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao fazer login: " + error.message;
    }
}
// Função de registro
async function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registro bem-sucedido!");
        window.location.href = "tarefas.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao registrar: " + error.message;
    }
}
// Função de logout
async function logout() {
    try {
        await signOut(auth);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro ao sair:", error);
    }
}
// Tornando as funções acessíveis globalmente
window.login = login;
window.registrar = registrar;
window.logout = logout;