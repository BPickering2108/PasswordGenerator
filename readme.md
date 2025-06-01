# Password Generator API

A **Flask-based password generator** that allows users to generate secure passwords via a web interface.  
Hosted on **Azure App Service** at **password.pickering.cloud** with automated deployments from **GitHub Actions**.

## 🔗 Live Application
🌍 **Access the application at**:  
🔗 [https://password.pickering.cloud](https://password.pickering.cloud)

## Features
- **Customizable passwords**: Set length, include/exclude symbols and numbers, remove specific characters.
- **Modern Web UI**: Interactive sliders, checkboxes, and reveal/copy functionality.
- **REST API**: Secure password generation via GET requests.
- **Automatic Deployment**: GitHub Actions ensures continuous delivery to Azure.

---

## 🔧 API Endpoints

| **Endpoint** | **Method** | **Description** |
|-------------|----------|----------------|
| `/generate` | `GET`   | Generates a random password |

### **Query Parameters**
- **`length`** → Password length (default: 12)
- **`use_symbols`** → `true` or `false` (default: `true`)
- **`use_numbers`** → `true` or `false` (default: `true`)
- **`exclude_chars`** → Specify characters to exclude (default: none)

#### **Example API Call**
GET https://password.pickering.cloud/generate?length=16&use_symbols=true&use_numbers=false&exclude_chars=!@#

#### **Response Example**
```json
{ "password": "aSd8LkPqRm2X" }

## To-Do:
- [] GitHub actions to automatically push to Azure
- [] API Rate-Limiting
- [] Dark mode toggle
