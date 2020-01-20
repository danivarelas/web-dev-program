@SpringBootTest
class AuthorServiceTest {

  @Autowired
  private AuthorService registerUseCase;

  @Test
  void test_saveNullAuthorMustReturnNull() {
  }

}