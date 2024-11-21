// Importation des modules nécessaires de React et React Router 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";//bech thezni lel confirmation 
import './registration.css';  // Ensure that you have a proper import for your CSS


// Déclaration du composant RegistrationForm
function RegistrationForm() {
  // Utilisation du hook useNavigate pour thezni lel page confirmation 
  const navigate = useNavigate();

  // Initialisation de l'état formData pour stocker les valeurs saisies dans le formulaire
  const [formData, setFormData] = useState({
    firstName: "", // Prénom de l'utilisateur
    lastName: "",  // Nom de l'utilisateur
    email: "",     // Adresse e-mail de l'utilisateur
    birthDate: "", // Date de naissance de l'utilisateur
    role: "",      // Poste de l'utilisateur (employé ou contrôleur)
    password: "",  // Mot de passe de l'utilisateur
    confirmPassword: "" // Confirmation du mot de passe
  });

  // État pour stocker les erreurs de validation pour chaque champ du formulaire (si l'utilisateur laisse un champ vide)
  const [errors, setErrors] = useState({});

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => { //e est l'événement qui contient des informations sur le champ en cours de modification (comme le nom du champ)
    // Met à jour l'état formData avec la valeur actuelle du champ
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction de validation du formulaire
  const validateForm = () => {
    const newErrors = {}; // Objet pour stocker les erreurs détectées dans chaque champs

    // Validation pour chaque champ : ajoute un message d'erreur si un champ est vide ou incorrect
    if (!formData.firstName) newErrors.firstName = "First Name required";
    if (!formData.lastName) newErrors.lastName = "Last Name required";
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.birthDate) newErrors.birthDate = "Birth Date required";
    if (!formData.role) newErrors.role = "Position required";
    if (!formData.password) newErrors.password = "password required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    // Met à jour l'état des erreurs avec les nouvelles erreurs trouvées
    setErrors(newErrors);

    // Retourne vrai si aucun champ n'a d'erreur, sinon faux
    return Object.keys(newErrors).length === 0;
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission
    if (validateForm()) {
      // Si la validation est réussie, redirige vers la page de confirmation
      navigate("/confirmation");
    }
  };

  // Interface utilisateur du formulaire d'inscription
return (
    <div className="registration-form">
      {/* Title */}
      <h2 className="form-title">Sign up</h2>
      {/* Formulaire d'inscription avec gestion de la soumission via handleSubmit .Le formulaire capture les données d'inscription et utilise la fonction handleSubmit pour gérer l'envoi et valider les informations. */}
      <form onSubmit={handleSubmit}> 
  
        {/* Champ pour le prénom */}
        <div>
          <label>First Name :</label>
          {/* Champ de saisie pour le prénom avec liaison aux données de l'état (formData.firstName) */}
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
          />
          {/* Affichage du message d'erreur pour le prénom si une erreur est présente */}
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
  
        {/* Champ pour le nom */}
        <div>
          <label>Last Name:</label>
          {/* Champ de saisie pour le nom avec liaison aux données de l'état (formData.lastName) */}
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
          />
          {/* Affichage du message d'erreur pour le nom si une erreur est présente */}
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
  
        {/* Champ pour l'email */}
        <div>
          <label>Email :</label>
          {/* Champ de saisie pour l'email avec liaison aux données de l'état (formData.email) */}
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {/* Affichage du message d'erreur pour l'email si une erreur est présente */}
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
  
        {/* Champ pour la date de naissance */}
        <div> 
          <label>Birth date:</label>
          {/* Champ de saisie pour la date de naissance avec liaison aux données de l'état (formData.birthDate) */}
          <input 
            type="date" 
            name="birthDate" 
            value={formData.birthDate} 
            onChange={handleChange} 
          />
          {/* Affichage du message d'erreur pour la date de naissance si une erreur est présente */}
          {errors.birthDate && <p className="error">{errors.birthDate}</p>}
        </div>
  
        {/* Sélecteur pour le poste (employé ou contrôleur) */}
        <div>
          <label>Position:</label>
          {/* Sélecteur pour choisir le poste, avec liaison aux données de l'état (formData.role) */}
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
          >
            {/* Option par défaut pour inviter l'utilisateur à sélectionner son poste */}
            <option value="">select your post</option>
            {/* Option pour le poste d'employé */}
            <option value="employe">employee</option>
            {/* Option pour le poste de contrôleur */}
            <option value="controlleur">controller</option>
          </select>
          {/* Affichage du message d'erreur pour le poste si une erreur est présente */}
          {errors.role && <p className="error">{errors.role}</p>}
        </div>
  
        {/* Champ pour le mot de passe */}
        <div>
          <label>Password:</label>
          {/* Champ de saisie pour le mot de passe avec liaison aux données de l'état (formData.password) */}
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
          {/* Affichage du message d'erreur pour le mot de passe si une erreur est présente */}
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
  
        {/* Champ pour la confirmation du mot de passe */}
        <div>
          <label>Confirm Password:</label>
          {/* Champ de saisie pour la confirmation du mot de passe, lié à l'état (formData.confirmPassword) */}
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
          />
          {/* Affichage du message d'erreur pour la confirmation du mot de passe si une erreur est présente */}
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
  
        {/* Bouton de soumission du formulaire */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
  
}

// Export du composant pour l'utiliser dans d'autres parties de l'application
export default RegistrationForm;