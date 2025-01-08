package expo.modules.settings

import org.junit.Assert.assertEquals
import org.junit.Test

class CalculatorTest {

  // A simple Calculator class for demonstration
  class Calculator {
    fun add(a: Int, b: Int): Int = a + b
    fun subtract(a: Int, b: Int): Int = a - b
  }

  private val calculator = Calculator()

  // Test for the add method
  @Test
  fun testAdd() {
    val result = calculator.add(2, 3)
    assertEquals("2 + 3 should equal 5", 5, result)
  }

  // Test for the subtract method
  @Test
  fun testSubtract() {
    val result = calculator.subtract(5, 3)
    assertEquals("5 - 3 should equal 2", 2, result)
  }
}