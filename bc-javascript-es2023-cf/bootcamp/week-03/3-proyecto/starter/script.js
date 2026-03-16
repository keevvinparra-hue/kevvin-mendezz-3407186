// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes
const interes_anual = 0.15;
const capital_inicial = 1_000_000;
const limite_diario_de_transacciones = 10;
const monto_maximo_por_transaccion = 10_000_000;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);
// INTERES ANUAL A MENSUAL
const interes_mensual = interes_anual / 12;
console.log("Interés mensual (%):", interes_mensual * 100, "%");
// LIMITE DE TRANSACCION
const monto_transferencia = 8_000_000;
const excedeLimite = monto_transferencia > monto_maximo_por_transaccion;
console.log("¿Excede el límite por transacción?", excedeLimite);
//CALCULAR INTERES GENERADOS EN UN AÑO
const interes_generado = capital_inicial * interes_anual;
console.log("Interés generado en un año:", interes_generado);
//CALCULAR MONTO FINAL CON INTERES COMPUESTO EN 3 AÑOS 
const años = 3;
const monto_final = capital_inicial * (1 + interes_anual) ** años;
console.log("Monto final con interés compuesto en 3 años:", monto_final);
//validar excesso de transacciones diaras usando moodulo 
const transacciones_realizadas = 12;
const transacciones_excedidas = transacciones_realizadas - limite_diario_de_transacciones;
console.log("Transacciones excedidas del límite diario:", transacciones_excedidas > 0 ? transacciones_excedidas : 0);
console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);
let balance = capital_inicial;
console.log("Balance inicial:", balance);
balance += interes_generado;   
console.log("Balance después de agregar interés generado:", balance);
balance -= 200_000;
console.log("Balance después de una retirada de 200,000:", balance);
balance *= 1.05;
console.log("Balance después de aplicar interés compuesto:", balance);
balance /= 2;
console.log("Balance después de dividir entre 2:", balance);    
console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);
const timeDelay = 8;
const timeLimit = timeDelay === 0;
console.log("¿Transacción a tiempo?", timeLimit);
const hasPenalty = timeDelay > 0;
console.log("¿Tiene penalización?", hasPenalty);
console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);
const isAccountActive = true;
const hasSufficientBalance = balance >= 500_000;
const canMakeTransaction = isAccountActive && hasSufficientBalance;
console.log("¿Puede realizar la transacción?", canMakeTransaction);
const isWeekend = false;
const isHoliday = true;
const isNonWorkingDay = isWeekend || isHoliday;
console.log("¿Es un día no laborable?", isNonWorkingDay);
console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores
console.log("Capital inicial:", capital_inicial);
console.log("Interés anual (%):", interes_anual * 100, "%");
console.log("Interés mensual (%):", interes_mensual * 100, "%");

console.log("Interés generado en un año:", interes_generado);
console.log("Monto final con interés compuesto en 3 años:", monto_final);

console.log("Monto de transferencia:", monto_transferencia);
console.log("¿Excede el límite por transacción?", excedeLimite);
console.log("Transacciones realizadas hoy:", transacciones_realizadas);
console.log("Transacciones excedidas del límite diario:", transacciones_excedidas > 0 ? transacciones_excedidas : 0);

console.log("Balance final:", balance);

console.log("¿Puede realizar la transacción?", canMakeTransaction);
console.log("¿Es un día no laborable?", isNonWorkingDay);
console.log("¿Transacción a tiempo?", timeLimit);
console.log("¿Tiene penalización?", hasPenalty);

console.log("=== fin del resumen ===");
console.log("");
