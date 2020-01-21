package com.example.demo;

import com.example.demo.api.DAO.AuthorDao;
import com.example.demo.api.Service.AuthorService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
class AuthorServiceTest {

    @Mock
    private AuthorDao authorDao;

    @Autowired
    @InjectMocks
    AuthorService authorService;

    @Test
    void test_saveNullAuthorMustReturnNull() {

    }

    @Test
    void test_saveNotNullAuthorMustSaveSuccessfully() {

    }

    @Test
    void test_saveAuthorWithNullNameMustReturnNull() {

    }

    @Test
    void test_saveAuthorWithExistingBook() {

    }

    @Test
    void test_saveAuthorWithNonExistingBook() {

    }

}