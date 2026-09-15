const MEMO_PROGRAM_ID = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";
const DEVNET_RPC = "https://api.devnet.solana.com";
const MAX_FILE_BYTES = 250 * 1024 * 1024;

const translations = {
  en: {
    pageTitle:"Angel Proof — Verifiable file integrity", description:"Create and verify a cryptographic fingerprint of evidence without uploading the original file or personal data.",
    eyebrow:"OJO CIUDADANO · INTEGRITY LAYER", headline:"Prove that a file", headlineAccent:"remains unchanged.", lede:"Create a unique fingerprint on your device. The file is never uploaded; only its fingerprint can be anchored to a public network.", trustAria:"Privacy guarantees", trustLocal:"Local processing", trustNoAccount:"No account required", trustNoStorage:"No evidence storage", toolAria:"Angel Proof tool", operationsAria:"Operations", createTab:"Create receipt", verifyTab:"Verify evidence", dropAria:"Select a file to generate a fingerprint", selectEvidence:"Select the evidence", dragEvidence:"Drag a photo, video, audio file, or document", chooseFile:"Choose file", neverLeaves:"No content leaves this device.", processedFile:"PROCESSED FILE", fingerprintCreated:"Fingerprint created", size:"Size", type:"Type", processed:"Processed", copy:"Copy", consent:"I understand that only this fingerprint will be published to Solana Devnet, a public test network. This does not certify the truth or legal validity of the file.", downloadReceipt:"Download receipt", anchorSolana:"Anchor on Solana", fileToVerify:"File to verify", selectFile:"Select file", receiptLabel:"Angel Proof receipt", selectJson:"Select .json", verifyButton:"Verify file and anchor", whatItProves:"WHAT IT PROVES", integrityTitle:"Integrity, not interpretation.", integrityBody:"A match proves that the verified file produces the same fingerprint as the registered one. It does not prove that the content is true, who created it, or guarantee legal admissibility.", quickTestEyebrow:"QUICK TEST", quickTestTitle:"Verify the core flow in under two minutes.", noWalletNeeded:"No wallet needed", stepOneTitle:"Choose a test file", stepOneBody:"Its SHA-256 fingerprint is computed locally.", stepTwoTitle:"Download the receipt", stepTwoBody:"It contains the fingerprint and verification metadata.", stepThreeTitle:"Verify the pair", stepThreeBody:"Upload the same file and receipt to confirm an exact match.", footerLeft:"Public prototype · Angel Protector / Ojo Ciudadano", footerRight:"Your evidence stays with you.", emptyFile:"The file is empty. Choose another file.", tooLarge:"The file exceeds this prototype's 250 MB limit.", calculating:"Calculating fingerprint…", unknown:"Unknown", receiptStatement:"This receipt verifies integrity, not truth, authorship, provenance, or legal admissibility.", processFailed:"The file could not be processed.", phantomMissing:"Install or open Phantom to sign the Devnet proof.", waitingSignature:"Waiting for signature…", confirmedPrefix:"Proof confirmed on Devnet.", viewTransaction:"View transaction", confirmedSuffix:"and download the updated receipt.", anchored:"Anchored on Solana", testSolNeeded:"The wallet needs test SOL on Devnet to pay the fee.", signatureFailed:"The signature was canceled or the network did not respond.", calculatingLocal:"Calculating local fingerprint…", noMatchTitle:"The evidence does not match.", noMatchBody:"The file differs from the one that generated this receipt, or its bytes changed.", receiptNoAnchor:"The receipt has no anchor; the local match is still valid.", badAnchorTitle:"The file matches, but the anchor could not be validated.", badAnchorBody:"The signature does not contain the expected fingerprint on Solana Devnet.", anchorConfirmed:"Anchor confirmed on Solana Devnet.", exactMatch:"Exact match.", exactMatchBody:"The file preserves the same SHA-256 fingerprint.", verifyFailed:"The comparison could not be completed.", hashCopied:"Fingerprint copied", invalidReceipt:"The receipt format is invalid.", selectBoth:"Select a file and its receipt"
  },
  es: {
    pageTitle:"Ángel Proof — Integridad verificable", description:"Crea y verifica una huella criptográfica de evidencia sin subir el archivo ni sus datos personales.",
    eyebrow:"OJO CIUDADANO · CAPA DE INTEGRIDAD", headline:"Comprueba que una evidencia", headlineAccent:"permanece intacta.", lede:"Genera una huella única dentro de tu dispositivo. El archivo nunca se sube; sólo su huella puede anclarse en una red pública.", trustAria:"Garantías de privacidad", trustLocal:"Procesamiento local", trustNoAccount:"Sin cuentas", trustNoStorage:"Sin almacenar evidencia", toolAria:"Herramienta Ángel Proof", operationsAria:"Operaciones", createTab:"Crear comprobante", verifyTab:"Verificar evidencia", dropAria:"Seleccionar archivo para generar huella", selectEvidence:"Selecciona la evidencia", dragEvidence:"Arrastra una foto, video, audio o documento", chooseFile:"Elegir archivo", neverLeaves:"Ningún contenido sale de este dispositivo.", processedFile:"ARCHIVO PROCESADO", fingerprintCreated:"Huella creada", size:"Tamaño", type:"Tipo", processed:"Procesado", copy:"Copiar", consent:"Entiendo que únicamente esta huella se publicará en Solana Devnet, una red pública de prueba. Esto no certifica la veracidad ni la validez legal del archivo.", downloadReceipt:"Descargar recibo", anchorSolana:"Anclar en Solana", fileToVerify:"Archivo por verificar", selectFile:"Seleccionar archivo", receiptLabel:"Recibo Ángel Proof", selectJson:"Seleccionar .json", verifyButton:"Verificar archivo y anclaje", whatItProves:"QUÉ DEMUESTRA", integrityTitle:"Integridad, no interpretación.", integrityBody:"Una coincidencia demuestra que el archivo verificado produce la misma huella que el registrado. No demuestra que el contenido sea verdadero, quién lo creó ni garantiza su admisibilidad legal.", quickTestEyebrow:"PRUEBA RÁPIDA", quickTestTitle:"Comprueba el flujo principal en menos de dos minutos.", noWalletNeeded:"Sin cartera", stepOneTitle:"Elige un archivo de prueba", stepOneBody:"Su huella SHA-256 se calcula localmente.", stepTwoTitle:"Descarga el recibo", stepTwoBody:"Contiene la huella y los metadatos de verificación.", stepThreeTitle:"Verifica el par", stepThreeBody:"Carga el mismo archivo y recibo para confirmar una coincidencia exacta.", footerLeft:"Prototipo público · Ángel Protector / Ojo Ciudadano", footerRight:"La evidencia permanece contigo.", emptyFile:"El archivo está vacío. Elige otro archivo.", tooLarge:"El archivo supera el límite de 250 MB de este prototipo.", calculating:"Calculando huella…", unknown:"Desconocido", receiptStatement:"Este recibo comprueba integridad, no veracidad, autoría, procedencia ni admisibilidad legal.", processFailed:"No fue posible procesar el archivo.", phantomMissing:"Instala o abre Phantom para firmar la prueba en Devnet.", waitingSignature:"Esperando firma…", confirmedPrefix:"Prueba confirmada en Devnet.", viewTransaction:"Ver transacción", confirmedSuffix:"y descarga nuevamente el recibo.", anchored:"Anclado en Solana", testSolNeeded:"La cartera necesita SOL de prueba en Devnet para pagar la comisión.", signatureFailed:"La firma fue cancelada o la red no respondió.", calculatingLocal:"Calculando huella local…", noMatchTitle:"La evidencia no coincide.", noMatchBody:"El archivo es distinto al que generó este recibo o sus bytes cambiaron.", receiptNoAnchor:"El recibo no contiene un anclaje; la coincidencia local sí es válida.", badAnchorTitle:"El archivo coincide, pero el anclaje no pudo validarse.", badAnchorBody:"La firma no contiene la huella esperada en Solana Devnet.", anchorConfirmed:"Anclaje confirmado en Solana Devnet.", exactMatch:"Coincidencia exacta.", exactMatchBody:"El archivo conserva la misma huella SHA-256.", verifyFailed:"No fue posible completar la comparación.", hashCopied:"Huella copiada", invalidReceipt:"El recibo no tiene un formato válido.", selectBoth:"Selecciona un archivo y su recibo"
  }
};

const state = { file: null, digest: null, receipt: null, verifyFile: null, verifyReceipt: null, lang: localStorage.getItem("angel-proof-lang") === "es" ? "es" : "en" };
const $ = (id) => document.getElementById(id);
const t = (key) => translations[state.lang][key];
const toast = (message) => { const el=$("toast"); el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2200); };
const bytesToHex = (buffer) => [...new Uint8Array(buffer)].map(b=>b.toString(16).padStart(2,"0")).join("");
const hashFile = async (file) => bytesToHex(await crypto.subtle.digest("SHA-256", await file.arrayBuffer()));
const formatBytes = (bytes) => bytes < 1024 ? `${bytes} B` : bytes < 1048576 ? `${(bytes/1024).toFixed(1)} KB` : `${(bytes/1048576).toFixed(2)} MB`;

function setLanguage(lang){
  state.lang=lang; localStorage.setItem("angel-proof-lang",lang); document.documentElement.lang=lang;
  document.title=t("pageTitle"); document.querySelector('meta[name="description"]').content=t("description");
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
  document.querySelectorAll("[data-i18n-aria]").forEach(el=>{el.setAttribute("aria-label",t(el.dataset.i18nAria));});
  document.querySelectorAll("[data-lang]").forEach(button=>{const active=button.dataset.lang===lang;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));});
  if(!state.file && !$("drop-zone").hidden) $("drop-zone").querySelector("h2").textContent=t("selectEvidence");
  if(!state.verifyFile) $("verify-file-name").textContent=t("selectFile");
  if(!state.verifyReceipt) $("receipt-file-name").textContent=t("selectJson");
}

async function processFile(file){
  if(!file) return;
  if(file.size===0){toast(t("emptyFile"));return;}
  if(file.size>MAX_FILE_BYTES){toast(t("tooLarge"));return;}
  state.file=file;
  const zone=$("drop-zone");
  zone.querySelector("h2").textContent=t("calculating");
  try{
    state.digest=await hashFile(file);
    const now=new Date();
    state.receipt={
      schema:"angel-proof/receipt/v1", version:"1.0", hashAlgorithm:"SHA-256", digest:state.digest,
      file:{name:file.name,size:file.size,type:file.type||"application/octet-stream",lastModified:new Date(file.lastModified).toISOString()},
      proof:{createdAt:now.toISOString(),network:"solana-devnet",signature:null,memoProgram:MEMO_PROGRAM_ID},
      statement:t("receiptStatement")
    };
    $("file-name").textContent=file.name; $("file-size").textContent=formatBytes(file.size);
    $("file-type").textContent=file.type||t("unknown"); $("processed-at").textContent=now.toLocaleString(state.lang==="es"?"es-MX":"en-US");
    $("hash-value").textContent=state.digest; zone.hidden=true; $("hash-result").hidden=false;
    $("anchor-consent").checked=false; $("anchor-button").disabled=true;
  }catch(error){ zone.querySelector("h2").textContent=t("selectEvidence"); toast(t("processFailed")); }
}

function downloadReceipt(){
  const blob=new Blob([JSON.stringify(state.receipt,null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`angel-proof-${state.digest.slice(0,12)}.json`; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

async function anchorOnSolana(){
  const message=$("wallet-message"); message.className="status-message";
  if(!state.digest||!$("anchor-consent").checked) return;
  const provider=window.phantom?.solana||window.solana;
  if(!provider?.isPhantom){ message.textContent=t("phantomMissing"); message.classList.add("error"); return; }
  const button=$("anchor-button"); button.disabled=true; button.textContent=t("waitingSignature");
  try{
    const {Connection,PublicKey,Transaction,TransactionInstruction}=await import("https://esm.sh/@solana/web3.js@1.98.4?bundle");
    const response=await provider.connect(); const publicKey=response.publicKey||provider.publicKey;
    const connection=new Connection(DEVNET_RPC,"confirmed"); const latest=await connection.getLatestBlockhash("confirmed");
    const memo=`ANGELPROOF:v1:sha256:${state.digest}`;
    const instruction=new TransactionInstruction({keys:[],programId:new PublicKey(MEMO_PROGRAM_ID),data:new TextEncoder().encode(memo)});
    const transaction=new Transaction({feePayer:publicKey,recentBlockhash:latest.blockhash}).add(instruction);
    const sent=await provider.signAndSendTransaction(transaction); const signature=typeof sent==="string"?sent:sent.signature;
    await connection.confirmTransaction({signature,blockhash:latest.blockhash,lastValidBlockHeight:latest.lastValidBlockHeight},"confirmed");
    const tx=await connection.getParsedTransaction(signature,{commitment:"confirmed",maxSupportedTransactionVersion:0});
    state.receipt.proof.signature=signature; state.receipt.proof.memo=memo; state.receipt.proof.wallet=publicKey.toString(); state.receipt.proof.slot=tx?.slot??null; state.receipt.proof.blockTime=tx?.blockTime??null;
    state.receipt.proof.explorer=`https://explorer.solana.com/tx/${signature}?cluster=devnet`;
    message.innerHTML=`${t("confirmedPrefix")} <a href="${state.receipt.proof.explorer}" target="_blank" rel="noreferrer">${t("viewTransaction")}</a> ${t("confirmedSuffix")}`;
    message.classList.add("success"); button.textContent=t("anchored");
  }catch(error){
    const short=String(error?.message||error).includes("0x1")?t("testSolNeeded"):t("signatureFailed");
    message.textContent=short; message.classList.add("error"); button.disabled=false; button.textContent=t("anchorSolana");
  }
}

async function runVerification(){
  const box=$("verify-result"); box.hidden=false; box.className="verify-result"; box.textContent=t("calculatingLocal");
  try{
    const digest=await hashFile(state.verifyFile); const expected=String(state.verifyReceipt.digest||"").toLowerCase(); const match=digest===expected;
    if(!match){box.classList.add("mismatch");box.innerHTML=`<b>${t("noMatchTitle")}</b><br>${t("noMatchBody")}`;return;}
    let anchor=t("receiptNoAnchor");
    if(state.verifyReceipt.proof?.signature){
      const {Connection,PublicKey}=await import("https://esm.sh/@solana/web3.js@1.98.4?bundle");
      const connection=new Connection(DEVNET_RPC,"confirmed");
      const tx=await connection.getParsedTransaction(state.verifyReceipt.proof.signature,{commitment:"confirmed",maxSupportedTransactionVersion:0});
      const expectedMemo=`ANGELPROOF:v1:sha256:${digest}`;
      const valid=!!tx&&!tx.meta?.err&&tx.transaction.message.instructions.some(ix=>ix.programId instanceof PublicKey&&ix.programId.toString()===MEMO_PROGRAM_ID&&ix.parsed===expectedMemo);
      if(!valid){box.classList.add("mismatch");box.innerHTML=`<b>${t("badAnchorTitle")}</b><br>${t("badAnchorBody")}`;return;}
      anchor=t("anchorConfirmed");
    }
    box.classList.add("match"); box.innerHTML=`<b>${t("exactMatch")}</b><br>${t("exactMatchBody")} ${anchor}`;
  }catch(error){ box.classList.add("mismatch"); box.textContent=t("verifyFailed"); }
}

document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(t=>{t.classList.toggle("active",t===tab);t.setAttribute("aria-selected",String(t===tab));});
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active")); $(`${tab.dataset.panel}-panel`).classList.add("active");
}));
const input=$("file-input"),zone=$("drop-zone"); $("browse-button").addEventListener("click",e=>{e.stopPropagation();input.click();}); zone.addEventListener("click",()=>input.click());
zone.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();input.click();}}); input.addEventListener("change",()=>processFile(input.files[0]));
["dragenter","dragover"].forEach(type=>zone.addEventListener(type,e=>{e.preventDefault();zone.classList.add("dragging");}));
["dragleave","drop"].forEach(type=>zone.addEventListener(type,e=>{e.preventDefault();zone.classList.remove("dragging");})); zone.addEventListener("drop",e=>processFile(e.dataTransfer.files[0]));
$("copy-hash").addEventListener("click",async()=>{await navigator.clipboard.writeText(state.digest);toast(t("hashCopied"));});
$("download-receipt").addEventListener("click",downloadReceipt); $("anchor-button").addEventListener("click",anchorOnSolana);
$("anchor-consent").addEventListener("change",e=>{$("anchor-button").disabled=!e.target.checked;});
$("verify-file").addEventListener("change",e=>{state.verifyFile=e.target.files[0];$("verify-file-name").textContent=state.verifyFile?.name||t("selectFile");checkVerify();});
$("receipt-file").addEventListener("change",async e=>{const file=e.target.files[0];$("receipt-file-name").textContent=file?.name||t("selectJson");try{state.verifyReceipt=JSON.parse(await file.text());if(state.verifyReceipt.schema!=="angel-proof/receipt/v1"||state.verifyReceipt.hashAlgorithm!=="SHA-256"||!/^[a-f0-9]{64}$/.test(state.verifyReceipt.digest))throw new Error();}catch{state.verifyReceipt=null;toast(t("invalidReceipt"));}checkVerify();});
function checkVerify(){$("verify-button").disabled=!(state.verifyFile&&state.verifyReceipt);} $("verify-button").addEventListener("click",runVerification);

document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>setLanguage(button.dataset.lang)));
setLanguage(state.lang);

if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
if(document.modelContext?.registerTool){
  document.modelContext.registerTool({name:"verify_local_evidence",title:"Verify local evidence",description:"Compares the selected file with the Angel Proof receipt loaded in the interface.",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:async()=>{if(!state.verifyFile||!state.verifyReceipt)throw new Error(t("selectBoth"));const digest=await hashFile(state.verifyFile);return{match:digest===state.verifyReceipt.digest,digest};}}).catch?.(()=>{});
}
